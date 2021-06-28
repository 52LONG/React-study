import { List } from "./list"
import { useEffect, useState } from "react"
import { SearchPanel } from "./search-panel"
import { cleanObject } from "utils";
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen =()=>{
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const [users,setUsers] = useState([])
    const [list, setList] = useState([])
    //list 如何传给另外一个组件List呢？
    useEffect(()=>{
        // `${apiUrl}/projects？name=${param.name}&personId=${param.parsonId}`这样写不好
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response=>{
            if(response.ok){
             setList(await response.json())       
            }
        })
    },[param])
    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
             setUsers(await response.json())       
            }
        })
    }, [])
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}/>
    </div>
}