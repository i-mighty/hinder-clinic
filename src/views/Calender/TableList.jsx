import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "../../components/CustomButtons/Button";
import {Switch} from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h4 className={classes.cardTitleWhite}>Today's Immunization</h4>
            <p className={classes.cardCategoryWhite}>
              List of all patients coming for immunization today
              {/*{this.props.location.search}*/}
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary", "Completed"]}
              tableData={[
                  {name: "Dakota Rice", country: "Niger", town: "Oud-Turnhout", salary: "$36,738", complete: false},
                  {name: "Dakota Rice", country: "Niger", town: "Oud-Turnhout", salary: "$36,738", complete: false},
                  {name: "Dakota Rice", country: "Niger", town: "Oud-Turnhout", salary: "$36,738", complete: false},
                  {name: "Dakota Rice", country: "Niger", town: "Oud-Turnhout", salary: "$36,738", complete: false},
                  {name: "Dakota Rice", country: "Niger", town: "Oud-Turnhout", salary: "$36,738", complete: false},
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        {/*<Card plain>*/}
        {/*  <CardHeader plain color="primary">*/}
        {/*    <h4 className={classes.cardTitleWhite}>*/}
        {/*      Table on Plain Background*/}
        {/*    </h4>*/}
        {/*    <p className={classes.cardCategoryWhite}>*/}
        {/*      Here is a subtitle for this table*/}
        {/*    </p>*/}
        {/*  </CardHeader>*/}
        {/*  <CardBody>*/}
        {/*    <Table*/}
        {/*      tableHeaderColor="primary"*/}
        {/*      tableHead={["ID", "Name", "Country", "City", "Salary"]}*/}
        {/*      tableData={[*/}
        {/*        ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],*/}
        {/*        ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],*/}
        {/*        ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],*/}
        {/*        [*/}
        {/*          "4",*/}
        {/*          "Philip Chaney",*/}
        {/*          "$38,735",*/}
        {/*          "Korea, South",*/}
        {/*          "Overland Park"*/}
        {/*        ],*/}
        {/*        [*/}
        {/*          "5",*/}
        {/*          "Doris Greene",*/}
        {/*          "$63,542",*/}
        {/*          "Malawi",*/}
        {/*          "Feldkirchen in Kärnten"*/}
        {/*        ],*/}
        {/*        ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]*/}
        {/*      ]}*/}
        {/*    />*/}
        {/*  </CardBody>*/}
        {/*</Card>*/}
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
