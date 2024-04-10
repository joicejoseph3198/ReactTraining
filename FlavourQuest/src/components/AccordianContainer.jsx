import AccordianItem from "./AccordianItem";

const AccordianContainer = ({instructionList,ingredientList,nutrientList}) => {
    return(
        <div>
            <AccordianItem title="Ingredients" content={ingredientList}/>
            <AccordianItem title="Nutritions" content={nutrientList}/>
            {instructionList.length > 0 && <AccordianItem title="How to make?" content={[].concat(...instructionList)}/>
            }
            
        </div>
    );
}
export default AccordianContainer;