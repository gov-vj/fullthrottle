import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone'
import {Button, Modal} from 'react-bootstrap';

function UserActivity({userActivity, setShow, show}) {
    const now = moment();
    const startOfTheDay = moment().startOf('day');
    const handleClose = () => setShow(false);
    const todayActivity = userActivity.activity_periods.filter(({start_time, end_time}) => {
        const startTime = moment.tz(start_time, 'MMM D YYYY  h:mma', userActivity.tz);
        const endTime = moment.tz(end_time, 'MMM D YYYY h:mma', userActivity.tz);
        return !(endTime.isBefore(startOfTheDay) || startTime.isAfter(now))
    })
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>User Activity for today - {userActivity.tz}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {todayActivity.map(({start_time, end_time}, i) => <li key={i}>{`${start_time} - ${end_time}`}</li>)}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    View calendar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserActivity;