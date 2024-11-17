import React from "react";

function HowItWorks() {
    return (
        <div className="p-10 space-y-6">
            <h1 className="text-3xl font-bold text-primary">How It Works</h1>
            <p className="text-lg text-gray-700">
                Welcome to our platform! Here’s how you can get started and make the most of your experience:
            </p>

            <div className="space-y-4">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                        1
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-secondary">Step 1: Sign Up</h3>
                        <p className="text-gray-600">
                            Create an account by signing up on the platform. Provide the necessary details and you’ll have full access to our features.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                        2
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-secondary">Step 2: Take the Mock Interviews</h3>
                        <p className="text-gray-600">
                            Once you’ve signed up, you can take mock interviews by answering questions related to your field. You'll be given a set of questions to answer, just like a real interview.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                        3
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-secondary">Step 3: Receive Feedback</h3>
                        <p className="text-gray-600">
                            After completing your mock interview, you’ll receive detailed feedback on your performance.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                        4
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-secondary">Step 4: Improve and Retry</h3>
                        <p className="text-gray-600">
                            Use the feedback to improve your answers and retry the interview. With each attempt, you'll get better and more confident.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
