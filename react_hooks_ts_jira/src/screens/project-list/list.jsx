export const List =({list,users})=>{
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project=><tr key={project.id}>
                <td>{project.name}</td>
                {/* undefined.name  会报错，如果personId不存在，那么就会是undefined.name*/}
                {/* users.find(user=>user.id === project.personId)?.name 加了？就是不会报错，整个表达式直接就是undefined */}
                <td>{users.find(user=>user.id === project.personId)?.name||'未知'}</td>
                </tr>)
            }
        </tbody>
    </table>
}