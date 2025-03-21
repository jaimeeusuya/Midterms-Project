import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome6';

export const Icons = {

    // Material Icons
    menu: () => <Icon1 name="menu" size={24} color="white" />,
    payment: () => <Icon1 name="wallet" size={24} color="black" />,
    news: () => <Icon1 name="newspaper" size={24} color="black" />,
    events: () => <Icon1 name="emoji-events" size={24} color="black" />,
    home: () => <Icon1 name="home" size={24} color="black" />,
    faqs: () => <Icon1 name="info" size={24} color="black" />,
    user: () => <Icon1 name="person" size={24} color="black" />,
    calendar: () => <Icon1 name="calendar-month" size={24} color="black" />,
    payment: () => <Icon1 name="attach-money" size={24} color="black" />,
    exit: () => <Icon1 name="exit-to-app" size={24} color="black" />,
    delete: () => <Icon1 name="delete" size={15} color="white" />,
    edit: () => <Icon1 name="edit" size={24} color="white" />,
    view: () => <Icon1 name="remove-red-eye" size={15} color="white" />,
    back: () => <Icon1 name="arrow-back" size={30} color="#114EA2" />,
    editEvent: () => <Icon1 name="edit-calendar" size={30} color="white" />,
    editPayment: () => <Icon1 name="payment" size={30} color="white" />,

    // Font Awesome 6 Icons
    adduser: () => <Icon2 name="user-plus" size={24} color="white" />,
    addEvent: () => <Icon2 name="calendar-plus" size={24} color="white" />,

}
