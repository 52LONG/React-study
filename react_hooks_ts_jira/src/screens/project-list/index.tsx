import { List } from "./list"
import { useEffect, useState } from "react"
import { SearchPanel } from "./search-panel"
import { cleanObject, useDebounce, useMount } from "utils";
import *as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen =()=>{
    const [param,setParam] = useState({
        name:'',
        personId:''
    })

    const [users,setUsers] = useState([])
    const [list, setList] = useState([])
    const debouncedParam = useDebounce(param,200)
    //list 如何传给另外一个组件List呢？
    useEffect(()=>{
        // `${apiUrl}/projects？name=${param.name}&personId=${param.parsonId}`这样写不好
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response=>{
            if(response.ok){
             setList(await response.json())       
            }
        })
    },[debouncedParam])
    //页面加载的时候执行一次 初始化的情况
    //优化 使用useMount
    // useEffect(() => {
     // },[])
    useMount(()=>{//优化方案使用 custom hooks
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
             setUsers(await response.json())       
            }
        })
    })
   
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}/>
    </div>
}