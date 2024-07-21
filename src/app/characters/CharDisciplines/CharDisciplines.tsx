'use client'
import Button from '@/app/components/Button/Button';
import './CharDisciplines.scss';
import { useRef, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function CharDisciplines({ ...props }) {
    const { data, params } = props

    const [isEditing, setIsEditing] = useState(false);

    const [disLevel, setDisLevel] = useState(data.disciplineLevels);
    const [disName, setDisName] = useState(data.disciplineName);
    const [disNotes, setDisNotes] = useState(data.disciplineNotes);



    const supabase = createClient()

    const form = useRef<any | undefined>();

    function editDisciplines() {
        setIsEditing(isEditing => !isEditing)
    }


    function cancelFormEdit() {
        setIsEditing(isEditing => !isEditing)
    }

    async function handleFormSubmit(event: any, form: any) {
        event.preventDefault();

        // console.log(form.current)
        let discName = form.current[0].value
        let discLevels = [
            form.current[1].checked,
            form.current[2].checked,
            form.current[3].checked,
            form.current[4].checked,
            form.current[5].checked
        ]
        let discNotes = form.current[6].value




        const { data: disData, error } = await supabase
            .from('charDisciplines')
            .update({
                disciplineName: discName,
                disciplineLevels: discLevels,
                disciplineNotes: discNotes
            })
            .eq('dis_id', data.dis_id)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {
            setDisName(discName)
            setDisLevel(discLevels)
            setDisNotes(discNotes)


            setIsEditing(isEditing => !isEditing);
        }
    }


    async function deleteDiscipline() {
        const { error } = await supabase
            .from('charDisciplines')
            .delete()
            .eq('dis_id', data.dis_id)
        if (error) {
            console.log(error);
        }

        if (!error) {
            window.location.reload();
        }
    }


    return (
        <>



            {!isEditing &&
                <div className='flex flex-col sm:w-3/12 sm:mx-0 max-w-xs w-full mx-auto w-xs'>
                    <a onClick={() => editDisciplines()}><i
                        className="icon icon-edit-b"></i></a>

                    <div className='flex items-center'>
                        <div className="disciplineName disciplineItem container flex flex-col">
                            {disName}
                        </div>
                        <div className="levels">
                            {disLevel.map((dis: any, index: any) => {
                                return (
                                    <div key={index} className={['circle', dis ? 'filled' : ''].join(' ')} ></div>
                                )
                            })}
                        </div>
                    </div>
                    <pre>{disNotes}</pre>
                </div>
            }

            {isEditing &&
                <div className='flex flex-col sm:w-3/12 sm:mx-0 max-w-xs w-full mx-auto w-xs'>
                    <a onClick={() => editDisciplines()}><i
                        className="icon icon-edit-b"></i></a>

                    <form ref={form} className='flex flex-col gap-2' onSubmit={(e) => handleFormSubmit(e, form)}>
                        <div className='flex gap-2'>
                            <div className="disciplineName disciplineItem container flex flex-col ">
                                <input className="border border-slate-200" defaultValue={disName} id="disName" />
                            </div>
                            <div className="levels flex items-center">
                                {disLevel.map((dis: any, index: any) => {
                                    return (
                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={dis} defaultChecked={dis} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex">
                            <textarea className="border border-slate-200 w-full" defaultValue={disNotes} id="disNotes"  ></textarea>

                        </div>
                        <Button type="submit">Update</Button>
                        <Button type="delete" buttonClick={deleteDiscipline}>Delete</Button>
                        <Button type="cancel" buttonClick={cancelFormEdit}>Cancel</Button>
                    </form>

                </div>
            }


        </>
    )
}