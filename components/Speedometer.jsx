/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Speedometer = ({ speed }) => {
  const [value, setValue] = useState(speed || 0);

  return (
    <div className="center">
      

      <Container className="p-3">
        <Row>
          <Col>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={100}
                ringWidth={20}
                customSegmentStops={[
                  0,20, 40, 60,80,100,
                ]}
                segmentColors={[
                  "#355E3B",
                  "#355E3B",
                  "#355E3B",
                  "#FF0000",
                  "#FF0000"
                ]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${value}%`}
                value={value}
              />
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default Speedometer;
