import { createClient } from "@/utils/supabase/server";
import { notFound, redirect } from "next/navigation";

export default async function Chroncile({ params, ...props }: { params: { chronicleID: number } }) {
    const { } = props;

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    // const { data: chronChars, error: chronCharsError } = await supabase
    //     .from('chronicle').select(`
    //     chron_id, 
    //     chronName, 
    //     character ( id, charName )
    //   `)

    // console.log(chronChars);



    // if (chronicles) {
    //     notFound()
    //   } else {
    //     return (
    //         <>
    //         </>
    //     )
    //   }

    return (
        <>
        </>
    )


}