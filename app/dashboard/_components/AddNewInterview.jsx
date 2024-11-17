// "use client"
// import React, { useState } from 'react'
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { chatSession } from '@/utils/GeminiAIModal'
// import { LoaderCircle } from 'lucide-react'
// import { db } from '@/utils/db'
// import { MockInterview } from '@/utils/schema'
// import { v4 as uuidv4 } from 'uuid';
// import { useUser } from '@clerk/nextjs'
// import moment from 'moment'
// import { useRouter } from 'next/navigation'

// function AddNewInterview() {
//     const [openDailog,setOpenDailog]=useState(false)
//     const [jobPosition,setJobPosition]=useState();
//     const [jobDesc,setJobDesc]=useState();
//     const [jobExperience,setJobExperience]=useState();
//     const [loading,setLoading]=useState(false);
//     const [jsonResponse,setJsonResponse]=useState([]);
//     const router=useRouter();
//     const {user}=useUser();
//     const onSubmit=async(e)=>{
//         setLoading(true)
//         e.preventDefault()
//         console.log(jobPosition,jobDesc,jobExperience);

//         const InputPrompt="Job position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience : "+jobExperience+" , Depends on Job Position, Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview question along with Answer in JSON format, Give us question and answer field on JSON"

//         const result=await chatSession.sendMessage(InputPrompt);
//         // const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')
//         // console.log(JSON.parse(MockJsonResp));
//         // setJsonResponse(MockJsonResp);
//         const MockJsonResp = (result.response.text())
//         .replace('```json', '')
//         .replace('```', '');
//       console.log(JSON.parse(MockJsonResp));
//       setJsonResponse(MockJsonResp);
//         if(MockJsonResp)
//         {
//         const resp=await db.insert(MockInterview)
//         .values({
//             mockId:uuidv4(),
//             jsonMockResp:MockJsonResp,
//             jobPosition:jobPosition,
//             jobDesc:jobDesc,
//             jobExperience:jobExperience,
//             createdBy:user?.primaryEmailAddress?.emailAddress,
//             createdAt:moment().format('DD-MM-yyyy')
//         }).returning({mockId:MockInterview.mockId});

//         console.log("Inserted ID:",resp)
//         if(resp)
//         {
//             setOpenDailog(false);
//             router.push('/dashboard/interview/'+resp[0]?.mockId)
//         }
//     }
//     else{
//         console.log("ERROR");
//     }
//         setLoading(false);
//     }
//   return (
//     <div>
//         <div className='p-10 border rounded-lg bg-secondary
//         hover:scale-105 hover:shadow-md cursor-pointer
//          transition-all border-dashed'
//          onClick={()=>setOpenDailog(true)}
//          >
//             <h2 className='text-lg text-center'>+ Add New</h2>
//         </div>
//         <Dialog open={openDailog}>
       
//         <DialogContent className="max-w-2xl">
//             <DialogHeader >
//             <DialogTitle className="text-2xl" >Tell us more about your job interviwing</DialogTitle>
//             <DialogDescription>
//                 <form onSubmit={onSubmit}>
//                 <div>
                   
//                     <h2>Add Details about yout job position/role, Job description and years of experience</h2>

//                     <div className='mt-7 my-3'>
//                         <label>Job Role/Job Position</label>
//                         <Input placeholder="Ex. Full Stack Developer" required
//                         onChange={(event)=>setJobPosition(event.target.value)}
//                         />
//                     </div>
//                     <div className=' my-3'>
//                         <label>Job Description/ Tech Stack (In Short)</label>
//                         <Textarea placeholder="Ex. React, Angular, NodeJs, MySql etc" 
//                         required
//                         onChange={(event)=>setJobDesc(event.target.value)} />
//                     </div>
//                     <div className=' my-3'>
//                         <label>Years of experience</label>
//                         <Input placeholder="Ex.5"  type="number"  max="100" 
//                         required
//                         onChange={(event)=>setJobExperience(event.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className='flex gap-5 justify-end'>
//                     <Button type="button" variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
//                     <Button type="submit" disabled={loading} >
//                         {loading? 
//                         <>
//                         <LoaderCircle className='animate-spin' /> Generating from AI
//                         </>:'Start Interview'    
//                     }
//                         </Button>
//                 </div>
//                 </form>
//             </DialogDescription>
//             </DialogHeader>
//         </DialogContent>
//         </Dialog>

//     </div>
//   )
// }

// export default AddNewInterview

"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      console.log(jobPosition, jobDesc, jobExperience);

      // Creating the input prompt for AI
      const InputPrompt = `Job position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}, Based on Job Position, Job Description & Years of Experience, provide ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions along with answers in JSON format. Use the fields "question" and "answer" in the JSON.`;

      // Sending the prompt to chatSession
      const result = await chatSession.sendMessage(InputPrompt);

      // Handling and sanitizing the raw response
      const rawResponse = await result.response.text();
      console.log("Raw Response Before Cleaning:", rawResponse);

      const cleanedResponse = rawResponse
        .replace(/```json/, "") // Remove the opening code block
        .replace(/```/, "") // Remove the closing code block
        .trim(); // Trim unnecessary whitespace

      const parsedResponse = JSON.parse(cleanedResponse); // Parse cleaned JSON
      console.log("Parsed JSON Response:", parsedResponse);
      setJsonResponse(parsedResponse);

      // Saving the parsed response to the database
      const resp = await db.insert(MockInterview).values({
        mockId: uuidv4(),
        jsonMockResp: JSON.stringify(parsedResponse), // Save the parsed JSON
        jobPosition,
        jobDesc,
        jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-yyyy"),
      }).returning({ mockId: MockInterview.mockId });

      console.log("Inserted ID:", resp);

      if (resp) {
        setOpenDialog(false);
        router.push(`/dashboard/interview/${resp[0]?.mockId}`);
      } else {
        console.log("Error: Database insertion failed.");
      }
    } catch (error) {
      console.error("Error in onSubmit:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interviewing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add Details about your job position/role, job description,
                    and years of experience
                  </h2>

                  <div className="mt-7 my-3">
                    <label>Job Role/Job Position</label>
                    <Input
                      placeholder="Ex. Full Stack Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Job Description/ Tech Stack (In Short)</label>
                    <Textarea
                      placeholder="Ex. React, Angular, NodeJs, MySql etc"
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Years of Experience</label>
                    <Input
                      placeholder="Ex. 5"
                      type="number"
                      max="100"
                      required
                      onChange={(event) =>
                        setJobExperience(event.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Generating
                        from AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
