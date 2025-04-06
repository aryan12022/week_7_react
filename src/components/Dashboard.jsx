 
 
 
 export default function Dashboard() {
 return   <div>
Dashboard Page
<Boldify>
    hi there
</Boldify>
<Boldify>
    hi there
</Boldify>
<Boldify>
    hi there
</Boldify>
</div>

}

function Boldify({children}){
    return <b>
        {children}
    </b>
}

