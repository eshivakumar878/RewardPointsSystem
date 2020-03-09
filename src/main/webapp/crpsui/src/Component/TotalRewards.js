import React, { Component } from 'react';
import axios from 'axios';
import { HotTable } from '@handsontable/react';
import Col from 'react-bootstrap/Col'

class TotalRewards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            skip: 0,
            take: 8,
            filter: {
                logic: "and",
                filters: [
                    { field: "txnAmount", operator: "contains", value: "" }
                ]
            },
            rewardSumData: []

        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/customer/getTotalRewardsByCust')
            .then(response =>
                this.setState({
                    ...this.state,
                    rewardSumData: response.data
                }))
    }


    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    }

    render() {
        return (
            <div>
                <Col sm={4}><h4>Rewards Points Summary by Customer</h4></Col>
                <Col sm={4}>
                    <HotTable data={this.state.rewardSumData} licenseKey='non-commercial-and-evaluation'
                        colHeaders={['Customer Name', 'Total Reward Points', 'txnNum']} columns={[{ data: 'customerName' }, { data: 'totRewardsByCus' }]}
                        rowHeaders={true} width="600" height="300" />
                </Col>
            </div>


        )
    }

}

export default TotalRewards;