import './ContactList.css';

import { ContactsContext } from '../contacts-context';

const ContactList = () => {
    return (
        <ContactsContext.Consumer>
            {({contacts}) => {
                return (
                    <div className="Contact_List">
                        <h1>Contact List</h1>
                        <div className="container">
                        <div className="button-container"><button className="btn btn-primary btn-lg">Add Contact</button></div>
                            <table className="table table-striped table-hover table-bordered">
                                <thead className='table-bordered'>
                                    <tr>
                                        <th scope="col">Profile Pic</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map(contact => {
                                        return (
                                            <tr>
                                                <td className="image-cell"><img src={contact.image_url} alt={contact.name} /></td>
                                                <td>{contact.name}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.phone_number}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }}
        </ContactsContext.Consumer>
    )
}

export default ContactList;