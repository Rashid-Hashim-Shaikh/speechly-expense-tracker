//Creating custom hooks for styling


import { makeStyles } from "@material-ui/core";

// Returns an object
export default makeStyles(() => ({
    income: {
        borderBottom: '10px solid rgba(0,255,0,0.5)',
    },
    expense: {
        borderBottom: '10px solid rgba(255,0,0,0.5)',
    }
}))