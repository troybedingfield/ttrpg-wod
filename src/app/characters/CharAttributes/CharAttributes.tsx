'use client'
import { useRef, useState } from 'react';
import './CharAttributes.scss';
import Button from '@/app/components/Button/Button';
import { createClient } from '@/utils/supabase/client';

export default function CharAttributes({ ...props }) {
    const { params, str, dex, stam, char, man, comp, int, wits, res } = props

    // Attribute arrays
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

    // boolean true count values for attribute arrays
    const [charStrCount, setStrCharCount] = useState(charStr.filter(Boolean).length)
    const [charDexCount, setDexCharCount] = useState(charDex.filter(Boolean).length)
    const [charStamCount, setStamCharCount] = useState(charStam.filter(Boolean).length)
    const [charCharCount, setCharCharCount] = useState(charChar.filter(Boolean).length)
    const [charManCount, setManCharCount] = useState(charMan.filter(Boolean).length)
    const [charCompCount, setCompCharCount] = useState(charComp.filter(Boolean).length)
    const [charIntCount, setIntCharCount] = useState(charInt.filter(Boolean).length)
    const [charWitsCount, setWitsCharCount] = useState(charWits.filter(Boolean).length)
    const [charResCount, setResCharCount] = useState(charRes.filter(Boolean).length)





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

            setStrCharCount(str.filter(Boolean).length);
            setDexCharCount(dex.filter(Boolean).length);
            setStamCharCount(stam.filter(Boolean).length);
            setCharCharCount(char.filter(Boolean).length);
            setManCharCount(man.filter(Boolean).length);
            setCompCharCount(comp.filter(Boolean).length);
            setIntCharCount(int.filter(Boolean).length);
            setWitsCharCount(wits.filter(Boolean).length);
            setResCharCount(res.filter(Boolean).length);


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
                    <div className="flex flex-col  sm:mx-0 max-w-xs w-full mx-auto w-xs">
                        <div className="characterName attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Strength</div>

                            <div className="levels">
                                {charStrCount > 0 && <div className='atrrCount pr-2'>{charStrCount}</div>}
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
                        <div className="characterChronicle attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Dexterity</div>

                            <div className="levels">
                                {charDexCount > 0 && <div className='atrrCount pr-2'>{charDexCount}</div>}
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
                        <div className="characterSire attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Stamina</div>

                            <div className="levels">
                                {charStamCount > 0 && <div className='atrrCount pr-2'>{charStamCount}</div>}
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
                    <div className="flex flex-col  sm:mx-0 max-w-xs w-full mx-auto w-xs">
                        <div className="characterConcept attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Charisma</div>

                            <div className="levels">
                                {charCharCount > 0 && <div className='atrrCount pr-2'>{charCharCount}</div>}
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
                        <div className="characterAmbition attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Manipulation</div>
                            <div className="levels">
                                {charManCount > 0 && <div className='atrrCount pr-2'>{charManCount}</div>}
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
                        <div className="characterDesire attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Composure</div>
                            <div className="levels">
                                {charCompCount > 0 && <div className='atrrCount pr-2'>{charCompCount}</div>}
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
                    <div className="flex flex-col  sm:mx-0 max-w-xs w-full mx-auto w-xs">
                        <div className="characterPredator attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Intelligence</div>
                            <div className="levels">
                                {charIntCount > 0 && <div className='atrrCount pr-2'>{charIntCount}</div>}
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
                        <div className="characterClan attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Wits</div>
                            <div className="levels">
                                {charWitsCount > 0 && <div className='atrrCount pr-2'>{charWitsCount}</div>}
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
                        <div className="characterGeneration attributeItem sm:columns-2 flex-wrap">
                            <div className='flex min-w-24'>Resolve</div>
                            <div className="levels">
                                {charResCount > 0 && <div className='atrrCount pr-2'>{charResCount}</div>}
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
                            <div className="flex flex-col  sm:mx-0 max-w-xs w-full mx-auto w-xs">
                                <div className="strengthAttribute attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="strength">Strength</label></div>

                                    <div className="form-group levels" >
                                        {charStrCount > 0 && <div className='atrrCount pr-2'>{charStrCount}</div>}
                                        {charStr.map((str: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={str} defaultChecked={str} />

                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="dexterityAttribute attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="dexterity">Dexterity </label></div>
                                    <div className="form-group levels" >
                                        {charDexCount > 0 && <div className='atrrCount pr-2'>{charDexCount}</div>}
                                        {charDex.map((dex: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={dex} defaultChecked={dex} />

                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="staminaAttribute attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="stamina">Stamina </label></div>
                                    <div className="form-group levels" >
                                        {charStamCount > 0 && <div className='atrrCount pr-2'>{charStamCount}</div>}
                                        {charStam.map((stam: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={stam} defaultChecked={stam} />

                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col  sm:mx-0 max-w-xs w-full mx-auto w-xs">
                                <div className="characterConcept attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="charisma">Charisma </label></div>
                                    <div className="form-group levels" >
                                        {charCharCount > 0 && <div className='atrrCount pr-2'>{charCharCount}</div>}
                                        {charChar.map((char: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={char} defaultChecked={char} />

                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="characterAmbition attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="manipulation">Manipulation </label></div>
                                    <div className="form-group levels" >
                                        {charManCount > 0 && <div className='atrrCount pr-2'>{charManCount}</div>}
                                        {charMan.map((man: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={man} defaultChecked={man} />

                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="characterDesire attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="composure">Composure </label></div>
                                    <div className="form-group levels" >
                                        {charCompCount > 0 && <div className='atrrCount pr-2'>{charCompCount}</div>}
                                        {charComp.map((comp: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={comp} defaultChecked={comp} />

                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col  sm:mx-0 max-w-xs w-full mx-auto w-xs">
                                <div className="characterPredator attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="intelligense">Intelligence </label></div>
                                    <div className="form-group levels" >
                                        {charIntCount > 0 && <div className='atrrCount pr-2'>{charIntCount}</div>}
                                        {charInt.map((int: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={int} defaultChecked={int} />

                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="characterClan attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="wits">Wits </label></div>
                                    <div className="form-group levels" >
                                        {charWitsCount > 0 && <div className='atrrCount pr-2'>{charWitsCount}</div>}
                                        {charWits.map((wits: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={wits} defaultChecked={wits} />

                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="characterGeneration attributeItem sm:columns-2 flex-wrap">
                                    <div className='flex min-w-24'><label htmlFor="resolve">Resolve </label></div>
                                    <div className="form-group levels" >
                                        {charResCount > 0 && <div className='atrrCount pr-2'>{charResCount}</div>}
                                        {charRes.map((res: any, index: any) => {
                                            return (

                                                <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={res} defaultChecked={res} />

                                            )
                                        })}
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