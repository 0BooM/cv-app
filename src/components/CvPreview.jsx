import Section from "./Section"

export default function CvPreview({generalInfo, educationalInfo, jobInfo}) {
    return (
        <div className="cv-container p-12 border border-blue-300 w-full lg:w-1/2 h-max">
            <Section title="General Information">
                <p className="mb-4"><strong>Name: </strong>{generalInfo.name}</p>
                <p className=" mb-4"><strong>Email: </strong>{generalInfo.email}</p>
                <p className=""><strong>Phone: </strong>{generalInfo.phone}</p>
            </Section>
            <Section title="Educational Information">
                <p className="mb-4"><strong>School name: </strong>{educationalInfo.school}</p>
                <p className="mb-4"><strong>Study title: </strong>{educationalInfo.studyTitle}</p>
                <p className="mb-4"><strong>Start date: </strong>{educationalInfo.schoolDateStart}</p>
                <p className="mb-4"><strong>End date: </strong>{educationalInfo.schoolDateEnd}</p>
            </Section>
            <Section title="Educational Information">
                <p className="mb-4"><strong>Company name: </strong>{jobInfo.company}</p>
                <p className="mb-4"><strong>Position title: </strong>{jobInfo.position}</p>
                <p className="mb-4"><strong>Job responsibilities: </strong>{jobInfo.responsibilities}</p>
                <p className="mb-4"><strong>Start date: </strong>{jobInfo.jobDateStart}</p>
                <p className="mb-4"><strong>End date: </strong>{jobInfo.jobDateEnd}</p>
            </Section>
        </div>
    )
}