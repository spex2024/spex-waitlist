import React, { useState } from 'react';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        currentManagement: '',
        currentManagementOther: '',
        challenges: '',
        challengesOther: '',
        interestLevel: '',
        features: [],
        featuresOther: '',
        suggestions: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                features: checked
                    ? [...prevData.features, value]
                    : prevData.features.filter((feature) => feature !== value)
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">SPEX Feedback Form</h2>
                <form onSubmit={handleSubmit}>
                    {/* Question 1 */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="currentManagement">
                            How does your organization currently manage food packaging and delivery?
                        </label>
                        <select
                            name="currentManagement"
                            id="currentManagement"
                            value={formData.currentManagement}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select an option</option>
                            <option value="Single-use plastic">Single-use plastic</option>
                            <option value="Biodegradable packaging">Biodegradable packaging</option>
                            <option value="Reusable containers">Reusable containers</option>
                            <option value="Other">Other</option>
                        </select>
                        {formData.currentManagement === 'Other' && (
                            <input
                                type="text"
                                name="currentManagementOther"
                                placeholder="Please specify"
                                value={formData.currentManagementOther}
                                onChange={handleChange}
                                className="mt-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        )}
                    </div>

                    {/* Question 2 */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="challenges">
                            What are the biggest challenges you face with your current food packaging and delivery methods?
                        </label>
                        <select
                            name="challenges"
                            id="challenges"
                            value={formData.challenges}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select an option</option>
                            <option value="Cost">Cost</option>
                            <option value="Environmental impact">Environmental impact</option>
                            <option value="Convenience">Convenience</option>
                            <option value="Quality and safety">Quality and safety</option>
                            <option value="Other">Other</option>
                        </select>
                        {formData.challenges === 'Other' && (
                            <input
                                type="text"
                                name="challengesOther"
                                placeholder="Please specify"
                                value={formData.challengesOther}
                                onChange={handleChange}
                                className="mt-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        )}
                    </div>

                    {/* Question 3 */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="interestLevel">
                            How interested are you in using a smart reusable packaging system for food delivery?
                        </label>
                        <select
                            name="interestLevel"
                            id="interestLevel"
                            value={formData.interestLevel}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select an option</option>
                            <option value="Very Interested">Very Interested</option>
                            <option value="Interested">Interested</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Uninterested">Uninterested</option>
                            <option value="Very Uninterested">Very Uninterested</option>
                        </select>
                    </div>

                    {/* Question 4 */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">
                            What features would you find most valuable in a smart reusable packaging system? (Select up to 3)
                        </label>
                        <div className="flex flex-col space-y-2">
                            {[
                                { label: 'Tracking packaging lifecycle and usage', value: 'Tracking' },
                                { label: 'Easy cleaning and sanitation', value: 'Cleaning' },
                                { label: 'Durability and longevity', value: 'Durability' },
                                { label: 'Compatibility with existing delivery systems', value: 'Compatibility' },
                                { label: 'User-friendly design for both customers and staff', value: 'UserFriendly' }
                            ].map((feature) => (
                                <div key={feature.value} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="features"
                                        value={feature.value}
                                        checked={formData.features.includes(feature.value)}
                                        onChange={handleChange}
                                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label className="text-gray-700">{feature.label}</label>
                                </div>
                            ))}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="features"
                                    value="Other"
                                    checked={formData.features.includes('Other')}
                                    onChange={handleChange}
                                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="text-gray-700">Other</label>
                                {formData.features.includes('Other') && (
                                    <input
                                        type="text"
                                        name="featuresOther"
                                        placeholder="Please specify"
                                        value={formData.featuresOther}
                                        onChange={handleChange}
                                        className="mt-2 ml-4 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Question 5 */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="suggestions">
                            What ideas or suggestions do you have for making a smart reusable packaging system successful in your organization or food delivery service?
                        </label>
                        <textarea
                            name="suggestions"
                            id="suggestions"
                            value={formData.suggestions}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            rows="4"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
