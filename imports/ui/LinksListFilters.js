import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';

export default class LinksListFilters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showVisible: true
        }
    }
    componentDidMount(){
        this.visiblityTracker = Tracker.autorun(()=>{
            this.setState({
                showVisible: Session.get('showVisible')
            });
        });
    }
    componentWillUnmount(){
        this.visiblityTracker.stop();
    }
    render() {
        return (
            <div>
                <label className="checkbox">
                    <input className="checkbox__box"
                        onChange={(e) => {
                        Session.set('showVisible', !e.target.checked)
                    }}
                        type="checkbox" checked={!this.state.showVisible}/>
                    show hidden links
                </label>
            </div>
        );
    }
}