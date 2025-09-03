import { TextInput } from "@repo/ui/text-input"

export default function chat(){
    return <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}>
        <div>
 Chat room
        </div>

        <div>
            <TextInput size="big" placeholder="Chat here"></TextInput>
        </div>
       
    </div>
}