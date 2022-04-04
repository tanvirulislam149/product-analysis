import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    function FirstChart() {
        return (
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Area
                        type="monotone"
                        dataKey="investment"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                </AreaChart>
            </ResponsiveContainer>
        );
    }


    function SecondChart() {
        return (
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

        );
    }


    return (
        <div>
            <h1>Dashboard</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <FirstChart></FirstChart>
                    </Col>
                    <Col xs={12} md={6}>
                        <SecondChart></SecondChart>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;