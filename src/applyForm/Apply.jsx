import { Button } from "@/components/ui/button";
import { AuthContext } from "@/Context/userContext";
import NavBar from "@/Header/nav/NavBar";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Apply = () => {
    const [naming, setNaming] = useState();
    const [qualify, setQualify] = useState(null);

    const [close, setClose] = useState(false);
    const [one, setOne] = useState(null);

    const { users } = useContext(AuthContext);

    const location = useLocation()
    const skill = location?.state?.modal

    const expert = skill?.requiredSkills || [];

    const checkIfQualifyToApply = (gifts, nam) => {
        const qualifies = expert.every((skill) => gifts.includes(skill));
        setQualify(qualifies);

        const hasOneSkillAtLeastOne = expert.some((skill) => gifts.includes(skill));
        setOne(!qualifies && hasOneSkillAtLeastOne);

        setClose(true);

        if (qualifies) {
            console.log("✅ Yes, user qualifies!");
        } else {
            console.log("❌ No, user does not qualify.");
        }

        setNaming(nam);
    };

    const closeModal = () => {
        setClose(false);
        setOne(false);
    };

    return (
        <div>
            <Link to={'/'}>
                <NavBar />
            </Link>
            <h1 className="text-center text-2xl mt-3">Start Your Application</h1>

            <div className="flex justify-center mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                    {users.map((el, i) => (
                        <div key={i} className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-gray-800">{el?.name}</h2>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-600">Skills:</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {el?.skills.length > 0 ? (
                                        el?.skills.map((skill, i) => (
                                            <span key={i} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                                                {skill}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-500">No skills listed</span>
                                    )}
                                </div>
                            </div>

                            <button onClick={() => checkIfQualifyToApply(el.skills, el.name)} className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all">
                                Click
                            </button>
                        </div>
                    ))}
                </div>
            </div>


            {close && qualify && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
                    <div className="bg-white w-[90%] md:w-[50%] lg:w-[40%] max-w-lg p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold text-green-600 text-center">🎉 Congratulations, {naming}!</h2>
                        <p className="text-gray-700 mt-2 text-center">You have successfully applied!</p>

                        <div className="mt-4 flex flex-col items-center">
                            <p className="text-lg font-semibold">Score: <span className="text-green-500">100%</span></p>
                            <span className="text-4xl">🟢</span>
                        </div>

                        <button onClick={closeModal} className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {close && one && !qualify && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
                    <div className="bg-white w-[90%] md:w-[50%] lg:w-[40%] max-w-lg p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold text-yellow-600 text-center">⚠️ Almost There, {naming}!</h2>
                        <p className="text-gray-700 mt-4 text-center ">You're close! Improve your skills and try again soon.Requrid Skill: {expert?.join(", ")} </p>

                        <div className="mt-4 flex flex-col items-center">
                            <p className="text-lg font-semibold">Score: <span className="text-yellow-500">80%</span></p>
                            <span className="text-4xl">🟡</span>
                        </div>

                        <button onClick={closeModal} className="mt-6 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {close && !qualify && !one && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
                    <div className="bg-white w-[90%] md:w-[50%] lg:w-[40%] max-w-lg p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold text-red-600 text-center">❌ You Don’t Qualify, {naming}</h2>
                        <p className="text-gray-700 mt-2 text-center">Please try again after acquiring the required skills.</p>

                        <div className="mt-4 flex flex-col items-center">
                            <p className="text-lg font-semibold">Score: <span className="text-red-500">0%</span></p>
                            <span className="text-4xl">🔴</span>
                        </div>

                        <p className="mt-3 text-center"><span className="font-semibold">Required Skills:</span> {expert?.join(", ")}</p>

                        <button onClick={closeModal} className="mt-6 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                            Close
                        </button>
                    </div>
                </div>
            )}


            <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div>
                            <h2 className="text-xl font-bold text-white">JobMatch</h2>
                            <p className="mt-2 text-sm">Helping you find the perfect job that matches your skills.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                            <ul className="mt-2 space-y-2">
                                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                                <li><a href="/jobs" className="hover:text-blue-400">Jobs</a></li>
                                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">Contact</h3>
                            <p className="mt-2 text-sm">📍 123 Job Street, Los Angeles, CA</p>
                            <p className="mt-2 text-sm">📞 +1 234 567 890</p>
                            <p className="mt-2 text-sm">📧 support@jobmatch.com</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                            <div className="mt-2 flex space-x-4">
                                <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-facebook text-2xl"></i></a>
                                <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-twitter text-2xl"></i></a>
                                <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-linkedin text-2xl"></i></a>
                                <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-instagram text-2xl"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} JobMatch. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Apply;