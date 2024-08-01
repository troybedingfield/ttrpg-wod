'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

const supabase = createClient()



export async function deleteChar(prevState: any, formData: FormData) {
    let id = formData.get('id')
    const { error } = await supabase
        .from('character')
        .delete()
        .eq('id', id)
    if (error) {
        console.log(error);
    }


    revalidatePath('/characters', 'layout')
    redirect('/characters')
}




export async function createChar(prevState: any, formData: FormData) {
    let user = formData.get('user')

    const { data: newCharacter, error: newCharError } = await supabase
        .from('character')
        .insert([
            { uuid: user, charName: 'Character Name' },
        ])
        .select()


    if (newCharError) {
        console.log(newCharError);
    }

    if (!newCharError) {
        const { data: newAtt, error: newAttError } = await supabase
            .from('charAttributes')
            .insert([
                { id: newCharacter[0].id, uuid: user, charStr: [false, false, false, false, false] },
            ])
            .select()

        if (newAttError) {
            console.log(newAttError);
        }

        const { data: newSkills, error: newSKillsError } = await supabase
            .from('charSkills')
            .insert([
                { id: newCharacter[0].id, uuid: user, charAth: [false, false, false, false, false] },
            ])
            .select()

        if (newSKillsError) {
            console.log(newSKillsError);
        }


        const { data: newTTCB, error: newTTCBError } = await supabase
            .from('charTTCB')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newTTCBError) {
            console.log(newTTCBError);
        }

        const { data: newRHH, error: newRHHError } = await supabase
            .from('charRHH')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newRHHError) {
            console.log(newRHHError);
        }

        const { data: newHW, error: newHWError } = await supabase
            .from('charHealthAndWillpower')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newHWError) {
            console.log(newHWError);
        }

        const { data: newExp, error: newExpError } = await supabase
            .from('charExperience')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newExpError) {
            console.log(newExpError);
        }

        const { data: newBP, error: newBPError } = await supabase
            .from('charBloodPotency')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newBPError) {
            console.log(newBPError);
        }

        const { data: newBN, error: newBNError } = await supabase
            .from('charBioAndNotes')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newBNError) {
            console.log(newBNError);
        }


        if (!newAttError && !newSKillsError && !newAttError && !newTTCBError && !newRHHError && !newHWError && !newExpError && !newBPError && !newBNError) {
            revalidatePath('/characters', 'layout')
            redirect(`/characters/${newCharacter[0].id}`)
        }
    }
}


export async function updateCharacterInfo(formData: any) {
    let id = formData.id;
    let name = formData.name;
    let chronicle = formData.chronicle;
    let sire = formData.sire;
    let concept = formData.concept;
    let ambition = formData.ambition;
    let desire = formData.desire;
    let predator = formData.predator;
    let clan = formData.clan;
    let generation = formData.generation;

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
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {


    }

    revalidatePath(`/characters/${id}`, 'layout');
    redirect(`/characters/${id}`);

}


export async function updateHealth(formData: any) {

    let id = formData.id
    let healthNumber = formData.healthNumber
    let health = formData.health


    const { data: charHealth, error: charHealthError } = await supabase
        .from('charHealthAndWillpower')
        .update({
            charHealth: health,
            health: healthNumber
        })
        .eq('id', id)
        .select()

    if (charHealthError) {
        console.log(charHealthError);
    }

    if (!charHealthError) {


    }


}


export async function updateWillpower(formData: any) {

    let id = formData.id
    let willpowerNumber = formData.willpowerNumber
    let willpower = formData.willpower



    const { data: charWillpower, error: charWillpowerError } = await supabase
        .from('charHealthAndWillpower')
        .update({
            charWillpower: willpower,
            willpower: willpowerNumber
        })
        .eq('id', id)
        .select()

    if (charWillpowerError) {
        console.log(charWillpowerError);
    }

    if (!charWillpowerError) {


    }
}


export async function updateResonance(formData: any) {

    let id = formData.id
    let resonance = formData.resonance


    const { data, error } = await supabase
        .from('charRHH')
        .update({
            resonance: resonance,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {


    }
}


export async function updateHunger(formData: any) {

    let id = formData.id
    let hunger = formData.hunger

    console.log(id, hunger);

    const { data, error } = await supabase
        .from('charRHH')
        .update({
            hunger: hunger,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {


    }
}


export async function updateHumanity(formData: any) {
    let id = formData.id
    let humanity = formData.humanity

    // console.log(id, humanity);

    const { data, error } = await supabase
        .from('charRHH')
        .update({
            humanity: humanity,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {



    }

}