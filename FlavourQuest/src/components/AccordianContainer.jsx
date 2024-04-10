import AccordianItem from "./AccordianItem";

const AccordianContainer = ({ingredi}) => {
    return(
        <div>
            <AccordianItem title="Ingredients" content="This is content.ThisThisThisThisThisThisThisThis ThisThisThisThisThisThisThisThis ThisThisThisThisThis"/>
            <AccordianItem title="Nutritions" content="This is content."/>
            <AccordianItem title="How to make?" content="This is content."/>
        </div>
    );
}
export default AccordianContainer;