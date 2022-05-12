var root = $('.old-ticket-container')[0];
root = ReactDOM.createRoot(root);
var tickets = [{ Title: 'Hello' }, { Title: 'World' }];
root.render(React.createElement(OldTickets, { tickets: tickets }));