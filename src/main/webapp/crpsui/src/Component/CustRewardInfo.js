import React, { Component } from 'react';
import axios from 'axios';
import { Grid, GridColumn, GridDetailRow } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class DetailComponent extends GridDetailRow {
    constructor(props) {
        super(props);
        this.state = {
            reretiveGrid: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/customer/getRewardinfo')
            .then(response =>
                this.setState({
                    ...this.state,
                    reretiveGrid: response.data
                }))
    }
    render() {
        const childData = this.state.reretiveGrid;

        return (
            <Grid data={childData}>
                <GridColumn field="txnNum" title="Transaction No" width="120px" />
                <GridColumn field="txnAmount" title="Transaction Amount" />
                <GridColumn field="txnDateTime" title="Transaction Date" />
                <GridColumn field="customerNo" title="Reward Points" />
            </Grid>
        );

    }
}

class CustRewardinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            skip: 0,
            take: 8,
            show: true,
            filter: {
                logic: "and",
                filters: [
                    { field: "txnAmount", operator: "contains", value: "" }
                ]
            },
            childData: [],
            rewardSumData: [
                ["Shiva", "100"],
                ["kumar", 10],
                ["Elakapally", 20],
                ["Rakesh", 30]
            ]
        };
        this.expandChange = this.expandChange.bind(this);
    }
    expandChange(event) {
        event.dataItem.expanded = event.value;
        this.setState({ ...this.state });

        if (!event.value || event.dataItem.details) {
            return;
        }
        /*   fetch('http://localhost:8080/customer/getRewardinfo', this.init)
           .then(response => response.json())
           .then(json => {
               let data = this.state.childData.slice();       
               this.setState({ childData: data });
           });*/
    }

    componentDidMount() {
        axios.get('http://localhost:8080/customer/getRewardinfo')
            .then(response =>
                this.setState({
                    ...this.state,
                    data: response.data
                }))
    }


    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div>
                <Row> <Col sm={8}><h4>Rewards Points Summary by Month</h4></Col>
                    <Col sm={8}> <Grid data={filterBy(this.state.data.slice(this.state.skip, this.state.skip + this.state.take), this.state.filter)}
                        skip={this.state.skip}
                        take={this.state.take}
                        total={this.state.data.length}
                        pageable={true}
                        filterable
                        filter={this.state.filter}
                        onFilterChange={(e) => {
                            this.setState({
                                filter: e.filter
                            });
                        }} onPageChange={this.pageChange}

                        detail={DetailComponent}
                        expandField="expanded"
                        onExpandChange={this.expandChange}
                    >
                        <GridColumn field="customerName" title="Customer Name" />
                        <GridColumn field="customerNo" title="Customer Number" />
                        <GridColumn field="month" title="Month" />
                        <GridColumn field="txnAmount" title="Number of Transaction" ></GridColumn>
                        <GridColumn field="totalrewardPoints" title="Total Reward Points" />
                    </Grid> </Col> </Row>
            </div>


        )
    }

}

export default CustRewardinfo;

