import Card from "./Card"


function Cards() {
    return (
        <div className="w-full">
            <div className="max-w-screen-lg mx-auto py-20 flex gap-1">
                <Card width={"basis-1/3"} start={false} para={true} head1={true} head2={true} />
                <Card width={"basis-2/3"} start={true} para={false} hov="true" head3={true} head4={true}/>
            </div>
            
        </div>
    )
}

export default Cards