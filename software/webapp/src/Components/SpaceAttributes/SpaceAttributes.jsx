import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";
import './SpaceAttributes.css'


class SpaceAttributes extends React.Component {
    


    state = {
        covered: false,
        compact: false,
        ev: false,
    }

    onNext() {
        this.props.setAttributes(this.state.covered, this.state.compact, this.state.ev);
        this.props.history.push('/results')
    }

    setCovered = () => {
        this.setState(prevState => ({ covered: !prevState.covered }));
    }

    setCompact = () => {
        this.setState(prevState => ({ compact: !prevState.compact }));
    }

    setEv = () => {
        this.setState(prevState => ({ ev: !prevState.ev }));
    }


    render() {

        return (
            <div className="attributes-Selection">
                <Button variant={this.state.covered ? "secondary" : 'primary'} size="lg" onClick={this.setCovered}>
                    Covered
                </Button>

                <Button variant={this.state.compact ? "secondary" : 'primary'} size="lg" onClick={this.setCompact}>
                    Compact
                </Button>

                <Button variant={this.state.ev ? "secondary" : 'primary'} size="lg" onClick={this.setEv}>
                    EV
                </Button>

                <Button className="submit" onClick={e => this.onNext()}>
                    Next >>
                </Button>
            </div>
        );
    }
}

export default withRouter(SpaceAttributes);