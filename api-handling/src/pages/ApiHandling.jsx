import { Button, Box } from "@mui/material"
import { useState } from "react";
import axios from 'axios';
import BAGrid from "../components/BAGrid";

const ApiHandling = () => {

    const [users, setUsers] = useState([]);
    const [dataLoader, setDataLoader] = useState(false);

    const getData = () => {
        setDataLoader(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data, "Success Response")
                setUsers([...res.data]);
                setDataLoader(false)
            }).catch((err) => {
                console.log(err, "Error");
                setDataLoader(false)
            })
    }

    const editData = (event) => {
        let editData = prompt("Edit Data");
        console.log(event.target.value)
    }

    return (
        <Box>
            <Button variant="contained" sx={{ margin: 1 }} onClick={getData}> Get Users </Button>
            <Button variant="contained" sx={{ margin: 1 }}> Post User </Button>
            <Button variant="contained" sx={{ margin: 1 }}> Update User </Button>
            <Button variant="contained" sx={{ margin: 1 }}> Delete User </Button>

            <BAGrid dataLoader={dataLoader} gridCols={[
                {
                    key: "name",
                    label: "User Name",
                },
                {
                    key: "email",
                    label: "User Email",
                },
                {
                    key: "phone",
                    label: "Phone",
                },
                {
                    key: "webiste",
                    label: "Website",
                },
                {
                    key: '',
                    label: 'Edit',
                    displayField: (row) => <Button onClick={(editData) => {
                        console.log(row)
                    }} variant="contained">Edit</Button>
                },
                {
                    key: '',
                    label: 'Delete',
                    displayField: (row) => <Button onClick={() => {
                        console.log(row)
                    }} variant="contained">Delete</Button>
                },
            ]} datasource={users} />
        </Box>
    )
}

export default ApiHandling;