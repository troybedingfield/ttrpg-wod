'use client'
import { useRef, useState } from 'react';
import './CharAttributes.scss';
import Button from '@/app/components/Button/Button';
import { createClient } from '@/utils/supabase/client';

export default function CharAttributes({ ...props }) {
    const { params, str, dex, stam, char, man, comp, int, wits, res } = props

    const [isEditing, setIsEditing] = useState(false);
    const [charStr, setCharStr] = useState(str);
    const [charDex, setCharDex] = useState(dex);
    const [charStam, setCharStam] = useState(stam);
    const [charChar, setCharChar] = useState(char);
    const [charMan, setCharMan] = useState(man);
    const [charComp, setCharComp] = useState(comp);
    const [charInt, setCharInt] = useState(int);
    const [charWits, setCharWits] = useState(wits);
    const [charRes, setCharRes] = useState(res);

    const supabase = createClient()

    const form = useRef<any | undefined>();

    function editAttributes() {
        setIsEditing(isEditing => !isEditing)
    }

    function cancelFormEdit() {
        setIsEditing(isEditing => !isEditing)
    }

    async function handleFormSubmit(event: any, form: any) {
        event.preventDefault();

        // console.log(event)
        let str = [
            form.current[0].checked,
            form.current[1].checked,
            form.current[2].checked,
            form.current[3].checked,
            form.current[4].checked
        ]
        let dex = [
            form.current[5].checked,
            form.current[6].checked,
            form.current[7].checked,
            form.current[8].checked,
            form.current[9].checked
        ]
        let stam = [
            form.current[10].checked,
            form.current[11].checked,
            form.current[12].checked,
            form.current[13].checked,
            form.current[14].checked
        ]
        let char = [
            form.current[15].checked,
            form.current[16].checked,
            form.current[17].checked,
            form.current[18].checked,
            form.current[19].checked
        ]
        let man = [
            form.current[20].checked,
            form.current[21].checked,
            form.current[22].checked,
            form.current[23].checked,
            form.current[24].checked
        ]
        let comp = [
            form.current[25].checked,
            form.current[26].checked,
            form.current[27].checked,
            form.current[28].checked,
            form.current[29].checked
        ]
        let int = [
            form.current[30].checked,
            form.current[31].checked,
            form.current[32].checked,
            form.current[33].checked,
            form.current[34].checked
        ]
        let wits = [
            form.current[35].checked,
            form.current[36].checked,
            form.current[37].checked,
            form.current[38].checked,
            form.current[39].checked
        ]
        let res = [
            form.current[40].checked,
            form.current[41].checked,
            form.current[42].checked,
            form.current[43].checked,
            form.current[44].checked
        ]


        const { data, error } = await supabase
            .from('charAttributes')
            .update({
                charStr: str,
                charDex: dex,
                charStam: stam,
                charChar: char,
                charMan: man,
                charComp: comp,
                charInt: int,
                charWits: wits,
                charRes: res
            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setCharStr(str);
            setCharDex(dex);
            setCharStam(stam);
            setCharChar(char);
            setCharMan(man);
            setCharComp(comp);
            setCharInt(int);
            setCharWits(wits);
            setCharRes(res);


            setIsEditing(isEditing => !isEditing);
        }
    }

    return (
        <>
            <div id="sectionTitle">
                <div className="sectionTitle">Attributes</div>

                <a onClick={() => editAttributes()}><i
                    className="icon icon-edit-b"></i></a>
            </div>
            {!isEditing && <div id="characterSheetAttributesContainer">
                <div className='container sm:columns-3'>
                    <div className="w-full max-w-60 sm:mx-auto">
                        <div className="characterName attributeItem">
                            Strength
                            <div className="levels">
                                {charStr.map((str: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', str ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                        <div className="characterChronicle attributeItem">
                            Dexterity
                            <div className="levels">
                                {charDex.map((dex: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', dex ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                        <div className="characterSire attributeItem">
                            Stamina
                            <div className="levels">
                                {charStam.map((stam: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', stam ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-60 sm:mx-auto">
                        <div className="characterConcept attributeItem">
                            Charisma
                            <div className="levels">
                                {charChar.map((char: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', char ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                        <div className="characterAmbition attributeItem">
                            Manipulation
                            <div className="levels">
                                {charMan.map((man: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', man ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                        <div className="characterDesire attributeItem">
                            Composure
                            <div className="levels">
                                {charComp.map((comp: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', comp ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-60 sm:mx-auto">
                        <div className="characterPredator attributeItem">
                            Intelligence
                            <div className="levels">
                                {charInt.map((int: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', int ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                        <div className="characterClan attributeItem">
                            Wits
                            <div className="levels">
                                {charWits.map((wits: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', wits ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                        <div className="characterGeneration attributeItem">
                            Resolve
                            <div className="levels">
                                {charRes.map((res: any, index: any) => {
                                    return (
                                        <div key={index} className={['circle', res ? 'filled' : ''].join(' ')} ></div>
                                    )
                                })}
                                {/* <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled" ></div>
                            <div className="circle filled"></div>
                            <div className="circle filled" ></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {isEditing && (
                <>
                    <form ref={form} id="characterSheetAttributesFormContainer" onSubmit={(e) => handleFormSubmit(e, form)}>

                        <div className="container sm:columns-3">
                            <div className="w-full max-w-60 sm:mx-auto">
                                <div className="strengthAttribute attributeItem">
                                    <label htmlFor="strength">Strength </label>
                                    <div className="form-group levels" >
                                        {charStr.map((str: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={str} defaultChecked={str} />

                                            )
                                        })}

                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                                <div className="dexterityAttribute attributeItem">
                                    <label htmlFor="dexterity">Dexterity </label>
                                    <div className="form-group levels" >
                                        {charDex.map((dex: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={dex} defaultChecked={dex} />

                                            )
                                        })}
                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                                <div className="staminaAttribute attributeItem">
                                    <label htmlFor="stamina">Stamina </label>
                                    <div className="form-group levels" >
                                        {charStam.map((stam: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={stam} defaultChecked={stam} />

                                            )
                                        })}
                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-60 sm:mx-auto">
                                <div className="characterConcept attributeItem">
                                    <label htmlFor="charisma">Charisma </label>
                                    <div className="form-group levels" >
                                        {charChar.map((char: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={char} defaultChecked={char} />

                                            )
                                        })}
                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                                <div className="characterAmbition attributeItem">
                                    <label htmlFor="manipulation">Manipulation </label>
                                    <div className="form-group levels" >
                                        {charMan.map((man: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={man} defaultChecked={man} />

                                            )
                                        })}
                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                                <div className="characterDesire attributeItem">
                                    <label htmlFor="composure">Composure </label>
                                    <div className="form-group levels" >
                                        {charComp.map((comp: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={comp} defaultChecked={comp} />

                                            )
                                        })}
                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-60 sm:mx-auto">
                                <div className="characterPredator attributeItem">
                                    <label htmlFor="intelligense">Intelligence </label>
                                    <div className="form-group levels" >
                                        {charInt.map((int: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={int} defaultChecked={int} />

                                            )
                                        })}
                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                                <div className="characterClan attributeItem">
                                    <label htmlFor="wits">Wits </label>
                                    <div className="form-group levels" >
                                        {charWits.map((wits: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={wits} defaultChecked={wits} />

                                            )
                                        })}
                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                                <div className="characterGeneration attributeItem">
                                    <label htmlFor="resolve">Resolve </label>
                                    <div className="form-group levels" >
                                        {charRes.map((res: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={res} defaultChecked={res} />

                                            )
                                        })}
                                        {/* <input id="level1" className="checkbox-round" type="checkbox" />
                                        <input id="level2" className="checkbox-round" type="checkbox" />
                                        <input id="level3" className="checkbox-round" type="checkbox" />
                                        <input id="level4" className="checkbox-round" type="checkbox" />
                                        <input id="level5" className="checkbox-round" type="checkbox" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <Button type="submit">Update</Button>
                            <Button type="button" buttonClick={cancelFormEdit}>Cancel</Button>
                        </div>

                    </form>
                </>
            )}
        </>
    )
}