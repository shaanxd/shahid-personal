import React, { useMemo, useState } from "react";
import { Collapse } from "react-collapse";
import styled from "styled-components";

import work, { Timeline } from "../data/work";
import useScreenWidth from "../hooks/useScreenWidth";
import colors from "../styles/colors";

enum Alignment {
  RIGHT = "RIGHT",
  LEFT = "LEFT",
}

interface TimelineProps {
  align: Alignment;
  item: Timeline;
  selected: boolean;
  onSeeMoreClick: (id: string | null) => void;
  isMobile: boolean;
}

const TimelineRoot = styled.div`
  display: flex;
  flex-direction: row;
`;

const Pane = styled.div<TimePaneStyleProps>`
  flex: 1;
  display: flex;
  justify-content: ${({ align }) =>
    align === Alignment.RIGHT ? "flex-start" : "flex-end"};
`;

const Separator = styled.div`
  width: 5px;
  background-color: ${colors.SECONDARY_DARK};
  margin: 0px 15px;
`;

const Card = styled.div`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.SECONDARY};
  max-width: 400px;
  flex: 1;
  border-radius: 5px;
  box-shadow: 10px 10px;
  ${colors.SECONDARY_DARK};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    max-width: unset;
  }
`;

interface TimePaneStyleProps {
  align: Alignment;
}

const TimePane = styled.div<TimePaneStyleProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) =>
    align === Alignment.RIGHT ? "flex-end" : "flex-start"};
`;

const Time = styled.div`
  padding: 5px 20px;
  border-radius: 20px;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
`;

const TimeAlt = styled.div`
  padding: 5px 0px;
  font-size: 12px;
  color: ${colors.WHITE};
  border-radius: 5px;
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`;

const Label = styled.span`
  color: ${colors.WHITE};
`;

const Position = styled(Label)``;

const Company = styled(Label)`
  font-size: 20px;
  font-weight: 600;
`;

const Stacks = styled.span`
  color: ${colors.PRIMARY_LIGHT};
  font-weight: 600;
`;

const Tasks = styled(Label)`
  margin-top: 5px;
  text-decoration: underline;
  font-size: 12px;
  cursor: pointer;
`;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const Task = styled(Label)`
  font-size: 11px;
  margin: 3px 0px;
`;

const TimelineItem = ({
  align,
  item,
  selected,
  onSeeMoreClick,
  isMobile,
}: TimelineProps) => {
  const { id, description, title, stacks, content, dates } = item;
  const handleOnSeeMore = () => {
    onSeeMoreClick(selected ? null : id);
  };

  const renderCard = () => (
    <Pane align={align}>
      <Card>
        <Company>{description}</Company>
        <Position>{title}</Position>
        <TimeAlt>{dates}</TimeAlt>
        <Stacks>{stacks.join(", ")}</Stacks>
        <Collapse isOpened={selected}>
          <TasksContainer>
            {content.map((item, idx) => (
              <Task key={idx}>{`• ${item}`}</Task>
            ))}
          </TasksContainer>
        </Collapse>
        <Tasks onClick={handleOnSeeMore}>
          {selected ? "Hide" : "View key tasks"}
        </Tasks>
      </Card>
    </Pane>
  );

  const renderTime = () => (
    <TimePane align={align}>
      <Time>{item.dates}</Time>
    </TimePane>
  );

  return (
    <TimelineRoot>
      {!isMobile
        ? align === Alignment.LEFT
          ? renderCard()
          : renderTime()
        : null}
      <Separator />
      {isMobile || align === Alignment.RIGHT
        ? renderCard()
        : !isMobile && renderTime()}
    </TimelineRoot>
  );
};

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 600px) {
    padding: 40px 10px;
  }
`;

const Title = styled(Label)`
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 2px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const GraduateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const ExtensionSeparator = styled(Separator)`
  height: 50px;
`;

const Start = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${colors.BLACK};
  border-radius: 100%;

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

const Graduate = styled(Card)`
  margin: 0px;
`;

const Work = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const width = useScreenWidth();

  const isMobile = useMemo(() => width <= 600, [width]);

  const handleOnSeeMoreClick = (id: string | null) => {
    setSelected(id);
  };

  return (
    <Container>
      <Title>Experience</Title>
      <TimelineContainer>
        <GraduateContainer>
          <Start />
          <ExtensionSeparator />
        </GraduateContainer>
        {work.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            align={index % 2 === 0 ? Alignment.LEFT : Alignment.RIGHT}
            selected={selected === item.id}
            onSeeMoreClick={handleOnSeeMoreClick}
            isMobile={isMobile}
          />
        ))}
        <GraduateContainer>
          <ExtensionSeparator />
          <Graduate>
            <Company>BSc. Honours in Software Engineering</Company>
            <Position>
              Asia Pacific Institute Of Information Technology
            </Position>
            <Stacks>
              Graduated obtaining a first class degree with honours.
            </Stacks>
          </Graduate>
        </GraduateContainer>
      </TimelineContainer>
    </Container>
  );
};

export default Work;
