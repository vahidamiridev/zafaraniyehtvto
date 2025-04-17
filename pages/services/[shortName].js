import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import courses from "@/data/courses.json";
import Card from "@/components/Card";

export const getStaticPaths = async () => {
  console.log(typeof courses)
  const paths = courses.map((course) => ({
      params: {
        shortName: course.id,
      },
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async ({params}) => {
const course = courses.find((course)=> course.id === params.shortName)


if(!course){
  return {
    notFound:true
  }
}

  return {
    props: { course },
  };
};

export default function SinglePageDetails( {course}) {


  return (
    <div className="container my-5">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8">
          <div
            className="img-container position-relative"
            style={{
              paddingTop: "80%",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <Image
              src={course.src}
              width={1024}
              height={1024}
              alt="Course Cover"
              className="img-coverr position-absolute w-100 h-100"
            />
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
        <h1 className="font-weight-bold"> {course.title}</h1>
        <p className="text-muted mt-3">
                {course.discription}
        </p>
      </div>
 
      <div className="bg-white p-4 rounded shadow-sm border">
        <h2 className="h5 border-bottom pb-2 mb-3 font-weight-bold">
        {course.title}
        </h2>

        <div className="accordion" id="courseAccordion">
              {
                course.fields.map((field)=>{
                  return <Card 
                  key={field.id}
                  field = {field}
                  />
                })
              }
        </div>
      </div>
    </div>
  );
}
