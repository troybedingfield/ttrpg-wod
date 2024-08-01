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


export async function updateAttributes(formData: any) {
    let id = formData.id
    let str = formData.str
    let dex = formData.dex
    let stam = formData.stam
    let char = formData.char
    let man = formData.man
    let comp = formData.comp
    let int = formData.int
    let wits = formData.wits
    let res = formData.res


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
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {


    }
}



export async function updateSkills(formData: any) {

    let id = formData.id
    let ath = formData.ath
    let athSpec = formData.athSpec
    let bra = formData.bra
    let braSpec = formData.braSpec
    let cra = formData.cra
    let craSpec = formData.craSpec
    let dri = formData.dri
    let driSpec = formData.driSpec
    let fir = formData.fir
    let firSpec = formData.firSpec
    let lar = formData.lar
    let larSpec = formData.larSpec
    let mel = formData.mel
    let melSpec = formData.melSpec
    let ste = formData.ste
    let steSpec = formData.steSpec
    let sur = formData.sur
    let surSpec = formData.surSpec
    let ani = formData.ani
    let aniSpec = formData.aniSpec
    let eti = formData.eti
    let etiSpec = formData.etiSpec
    let ins = formData.ins
    let insSpec = formData.insSpec
    let int = formData.int
    let intSpec = formData.intSpec
    let lea = formData.lea
    let leaSpec = formData.leaSpec
    let perf = formData.perf
    let perfSpec = formData.perfSpec
    let per = formData.per
    let perSpec = formData.perSpec
    let str = formData.str
    let strSpec = formData.strSpec
    let sub = formData.sub
    let subSpec = formData.subSpec
    let aca = formData.aca
    let acaSpec = formData.acaSpec
    let awa = formData.awa
    let awaSpec = formData.awaSpec
    let fin = formData.fin
    let finSpec = formData.finSpec
    let inv = formData.inv
    let invSpec = formData.invSpec
    let med = formData.med
    let medSpec = formData.medSpec
    let occ = formData.occ
    let occSpec = formData.occSpec
    let pol = formData.pol
    let polSpec = formData.polSpec
    let sci = formData.sci
    let sciSpec = formData.sciSpec
    let tec = formData.tec
    let tecSpec = formData.tecSpec

    const { data, error } = await supabase
        .from('charSkills')
        .update({
            charAth: ath,
            charAthSpec: athSpec,
            charBrawl: bra,
            charBrawlSpec: braSpec,
            charCraft: cra,
            charCraftSpec: craSpec,
            charDrive: dri,
            charDriveSpec: driSpec,
            charFire: fir,
            charFireSpec: firSpec,
            charLarc: lar,
            charLarcSpec: larSpec,
            charMelee: mel,
            charMeleeSpec: melSpec,
            charStealth: ste,
            charStealthSpec: steSpec,
            charSurv: sur,
            charSurvSpec: surSpec,
            charAK: ani,
            charAKSpec: aniSpec,
            charEtiq: eti,
            charEtiqSpec: etiSpec,
            charInsi: ins,
            charInsiSpec: insSpec,
            charIntim: int,
            charIntimSpec: intSpec,
            charLead: lea,
            charLeadSpec: leaSpec,
            charPerf: perf,
            charPerfSpec: perfSpec,
            charPers: per,
            charPersSpec: perSpec,
            charStreet: str,
            charStreetSpec: strSpec,
            charSubt: sub,
            charSubtSpec: subSpec,
            charAcad: aca,
            charAcadSpec: acaSpec,
            charAware: awa,
            charAwareSpec: awaSpec,
            charFin: fin,
            charFinSpec: finSpec,
            charInvest: inv,
            charInvestSpec: invSpec,
            charMed: med,
            charMedSpec: medSpec,
            charOccult: occ,
            charOccutSpec: occSpec,
            charPol: pol,
            charPolSpec: polSpec,
            charSci: sci,
            charSciSpec: sciSpec,
            charTech: tec,
            charTechSpec: tecSpec

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {


    }
}


export async function createDiscipline(user: any, id: any) {

    const { data: newDiscipline, error: newDiscError } = await supabase
        .from('charDisciplines')
        .insert([
            { uuid: user, id: id, disciplineName: 'Discipline Name' },
        ])
        .select()


    if (newDiscError) {
        console.log(newDiscError);
    }


    revalidatePath(`/characters/${id}`, 'layout');
    redirect(`/characters/${id}`);
}


export async function updateDiscipline(formData: any) {

    let disID = formData.disID
    let discName = formData.discName
    let discLevels = formData.discLevels
    let discNotes = formData.discNotes



    const { data: disData, error } = await supabase
        .from('charDisciplines')
        .update({
            disciplineName: discName,
            disciplineLevels: discLevels,
            disciplineNotes: discNotes
        })
        .eq('dis_id', disID)
        .select()

    if (error) {
        console.log(error);
    }


}


export async function deleteDiscipline(disID: any, id: any) {
    const { error } = await supabase
        .from('charDisciplines')
        .delete()
        .eq('dis_id', disID)
    if (error) {
        console.log(error);
    }



    revalidatePath(`/characters/${id}`, 'layout');
    redirect(`/characters/${id}`);
}


export async function updateTenets(formData: any) {
    let id = formData.id
    let chronTenets = formData.chronTenets


    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            chronTenets: chronTenets,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }


}

export async function updateTouchstones(formData: any) {
    let id = formData.id
    let touchConvictions = formData.touchConvictions


    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            touchstoneAndConvictions: touchConvictions,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }


}


export async function updateClanBane(formData: any) {
    let id = formData.id
    let clanBane = formData.clanBane

    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            clanBane: clanBane,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }


}