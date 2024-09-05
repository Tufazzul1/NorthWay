import { LiaComments } from "react-icons/lia";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import SectionTitle from "../Shared/SectionTitle";
import Button from "../Shared/Button";

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Emotional Intelligence in Education Building",
            image: Blog1,
            comments: "25 comments",
            date: "July 24, 2024",
            back: "Back Theme"
        },
        {
            id: 2,
            title: "Emotional Intelligence in Education Building",
            image: Blog2,
            comments: "25 comments",
            date: "July 24, 2024",
            back: "Back Theme"
        },
        {
            id: 3,
            title: "Emotional Intelligence in Education Building",
            image: Blog3,
            comments: "25 comments",
            date: "July 24, 2024",
            back: "Back Theme"
        }
    ];

    return (
        <div className="my-16">
            <div className="mx-auto text-center p-4 md:w-6/12">
            <SectionTitle heading={"Our Latest"} color={"Blog"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5 max-w-6xl mx-auto p-2">
                {blogs.map((blog) => (
                    <div key={blog.id} className="h-[400px] bg-base-100 shadow-xl">
                        <figure><img src={blog.image} alt={blog.title} /></figure>
                        <div className="card-body">
                            <h3 className='flex gap-2 items-center'><SlCalender /> {blog.date}</h3>
                            <h2 className="card-title">{blog.title}</h2>
                            <div className="card-actions mt-3 flex justify-between">
                                <h3 className="flex gap-2 items-center"><LiaComments /> {blog.comments}</h3>
                                <h3 className="flex gap-2 items-center"><CgProfile /> {blog.back} </h3>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="mt-8 flex justify-center w-full">
                <Button text={"Brows More Blog"}></Button>
            </div>
        </div>
    );
};

export default Blog;
