'use client'
import { useRef, useState } from 'react';
import './CharacterInfo.scss'
import Button from '@/app/components/Button/Button';
import { createClient } from '@/utils/supabase/client';

export default function CharacterInfo({ ...props }) {
    const {
        name,
        chronicle,
        sire,
        concept,
        ambition,
        desire,
        predator,
        clan,
        generation,
        params } = props

    const supabase = createClient()




    const [isEditing, setIsEditing] = useState(false);
    const [charName, setCharName] = useState(name);
    const [charChron, setCharChron] = useState(chronicle);
    const [charSire, setCharSire] = useState(sire);
    const [charConcept, setCharConcept] = useState(concept);
    const [charAmbition, setCharAmbition] = useState(ambition);
    const [charDesire, setCharDesire] = useState(desire);
    const [charPredator, setCharPredator] = useState(predator);
    const [charClan, setCharClan] = useState(clan);
    const [charGeneration, setCharGeneration] = useState(generation);

    const form = useRef<any | undefined>();

    function editInfo() {
        setIsEditing(isEditing => !isEditing)

    }

    // function handleNameChange(event: any) {
    //     setCharName(event.target.value);
    // }
    // function handleChronicleChange(event: any) {
    //     setCharChron(event.target.value);
    // }
    // function handleSireChange(event: any) {
    //     setCharSire(event.target.value);
    // }
    // function handleConceptChange(event: any) {
    //     setCharConcept(event.target.value);
    // }
    // function handleAmbitionChange(event: any) {
    //     setCharAmbition(event.target.value);
    // }
    // function handleDesireChange(event: any) {
    //     setCharDesire(event.target.value);
    // }
    // function handlePredatorChange(event: any) {
    //     setCharPredator(event.target.value);
    // }
    // function handleClanChange(event: any) {
    //     setCharClan(event.target.value);
    // }
    // function handleGenerationChange(event: any) {
    //     setCharGeneration(event.target.value);
    // }



    function cancelFormEdit() {
        setIsEditing(isEditing => !isEditing)
    }


    async function handleFormSubmit(event: any, form: any) {

        event.preventDefault();

        // console.log(event)

        let name = form.current[0].value;
        let chronicle = form.current[1].value;
        let sire = form.current[2].value;
        let concept = form.current[3].value;
        let ambition = form.current[4].value;
        let desire = form.current[5].value;
        let predator = form.current[6].value;
        let clan = form.current[7].value;
        let generation = form.current[8].value;

        console.log(name, chronicle, sire, concept, ambition, desire, predator, clan, generation)

        const { data, error } = await supabase
            .from('character')
            .update({
                charName: name,
                charChronicle: chronicle,
                charSire: sire,
                charConcept: concept,
                charAmbition: ambition,
                charDesire: desire,
                charPredator: predator,
                charClan: clan,
                charGen: generation
            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setCharName(name);


            setCharChron(chronicle);


            setCharSire(sire);


            setCharConcept(concept);


            setCharAmbition(ambition);


            setCharDesire(desire);


            setCharPredator(predator);


            setCharClan(clan);


            setCharGeneration(generation);


            setIsEditing(isEditing => !isEditing)
        }













    }

    return (
        <>
            <div id="sectionTitle">
                <div className="sectionTitle">Info</div>
                <a onClick={() => editInfo()}><i
                    className="icon icon-edit-b"></i></a>
                {/* <Button class="editBtn" buttonClick={(e: any) => editInfo(e)}>edit</Button> */}
            </div>
            {!isEditing && <div id="characterSheetInfoContainer" className='container'>
                <div className='container sm:columns-3'>
                    <div className="w-full sm:max-w-60 sm:mx-auto">
                        <div className="characterName infoItem">
                            Name: {charName}
                        </div>
                        <div className="characterChronicle infoItem">
                            Chronicle: {charChron}
                        </div>
                        <div className="characterSire infoItem">
                            Sire: {charSire}
                        </div>
                    </div>
                    <div className="w-full sm:max-w-60 sm:mx-auto">
                        <div className="characterConcept infoItem">
                            Concept: {charConcept}
                        </div>
                        <div className="characterAmbition infoItem">
                            Ambition: {charAmbition}
                        </div>
                        <div className="characterDesire infoItem">
                            Desire: {charDesire}
                        </div>
                    </div>
                    <div className="w-full sm:max-w-60 sm:mx-auto">
                        <div className="characterPredator infoItem">
                            Predator: {charPredator}
                        </div>
                        <div className="characterClan infoItem">
                            Clan: {charClan}
                        </div>
                        <div className="characterGeneration infoItem">
                            Generation: {charGeneration}
                        </div>
                    </div>
                </div>
            </div>}

            {isEditing && <form ref={form} id="characterSheetInfoFormContainer" onSubmit={(e) => handleFormSubmit(e, form)}>

                <div className="formFields">
                    <div className="characterInfoColumn">
                        <div className="characterName infoItem">
                            <label htmlFor="Name">Name: </label>
                            <input id="Name" defaultValue={charName} type="text" />
                        </div>
                        <div className="characterChronicle infoItem">
                            <label htmlFor="Chronicle">Chronicle: </label>
                            <input id="Chronicle" defaultValue={charChron} type="text" />
                        </div>
                        <div className="characterSire infoItem">
                            <label htmlFor="Sire">Sire: </label>
                            <input id="Sire" defaultValue={charSire} type="text" />
                        </div>
                    </div>

                    <div className="characterInfoColumn">
                        <div className="characterConcept infoItem">
                            <label htmlFor="Concept">Concept: </label>
                            <input id="Concept" defaultValue={charConcept} type="text" />
                        </div>
                        <div className="characterAmbition infoItem">
                            <label htmlFor="Ambition">Ambition: </label>
                            <input id="Ambition" defaultValue={charAmbition} type="text" />
                        </div>
                        <div className="characterDesire infoItem">
                            <label htmlFor="Desire">Desire: </label>
                            <input id="Desire" defaultValue={charDesire} type="text" />
                        </div>
                    </div>

                    <div className="characterInfoColumn">
                        <div className="characterPredator infoItem">
                            <label htmlFor="Predator">Predator: </label>
                            <input id="Predator" defaultValue={charPredator} type="text" />
                        </div>
                        <div className="characterClan infoItem">
                            <label htmlFor="Clan">Clan: </label>
                            <input id="Clan" defaultValue={charClan} type="text" />
                        </div>
                        <div className="characterGeneration infoItem">
                            <label htmlFor="Generation">Generation: </label>
                            <input id="Generation" defaultValue={charGeneration} type="text" />
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <Button type="submit">Update</Button>
                    <Button type="cancel" buttonClick={cancelFormEdit}>Cancel</Button>
                </div>
            </form>}
        </>
    )
}