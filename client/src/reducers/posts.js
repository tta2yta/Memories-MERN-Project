import { Switch } from "@material-ui/core"
import Posts from "../components/Posts/Posts";

// const reducer=(state=[], action)=>{
export default reducer=(posts=[], action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
    
        default:
            break;
    }
}