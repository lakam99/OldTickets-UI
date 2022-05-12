class OldTicket extends React.Component {
    constructor(props) {
        super(props);
        if (!props.ticket) throw "Must include ticket data.";
        this.ticket = props.ticket;
        this.parent = props.parent;
    }

    close_ticket(e) {
        let parent_tickets = Object.create(this.parent.state.tickets);
        let me = parent_tickets.indexOf(this.ticket);
        parent_tickets.splice(me, 1);
        this.parent.setState({tickets: parent_tickets});
    }

    render() {
        return (
            <div class='list-item'>
                <a class="old-ticket-title" href="#">{this.ticket.Title}</a>
                    <a class="close-ticket" onClick={this.close_ticket.bind(this)}>Close</a>
            </div>
        );
    }
}