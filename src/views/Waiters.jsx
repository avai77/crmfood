import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

class Waiters extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Employed Waiters</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Login</th>
                        <th>Password</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jim Sturgees</td>
                        <td>JimmyStu</td>
                        <td>12435643</td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Minnniee</td>
                        <td>654325</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Johnny Depp</td>
                        <td>JohhnnyBoy</td>
                        <td>987654343</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Kanye West</td>
                        <td>Tomboi_Kanye</td>
                        <td>13245644532</td>
                        <td className="text-right">$38,735</td>
                      </tr>
                      <tr>
                        <td>Barack Obama</td>
                        <td>Monkey Bama</td>
                        <td>98765467</td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Jason Mamoa</td>
                        <td>Aquaman</td>
                        <td>12345678543</td>
                        <td className="text-right">$78,615</td>
                      </tr>
                      <tr>
                        <td>Vladimir Zelensky</td>
                        <td>ComedyMan</td>
                        <td>7654326543</td>
                        <td className="text-right">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div>
          <Button color="success">Add Waiters</Button>{' '}
          </div>
        </div>
      </>
    );
  }
}

export default Waiters;
