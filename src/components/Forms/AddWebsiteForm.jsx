import React, { useState } from "react";

const AddWebsiteForm = () => {
  const [formData, setFormData] = useState({
    language: "",
    mediaType: "",
    nofollow: false,
    category: "",
    webDomain: "",
    mediaName: "",
    price: "",
    description: "",
    publicationGuidelines: "",
    publicationDuration: "",
    averagePublicationTime: "",
    extra: [],
    facebook: "",
    instagram: "",
    tiktok: "",
    reddit: "",
    telegram: "",
    sensitiveTopics: [],
    googleNews: false,
  });

  // Move extras state to the main component
  const [extras, setExtras] = useState([{ select: "", price: "" }]);

  const handleAddExtra = () => {
    setExtras([...extras, { select: "", price: "" }]);
  };

  const handleRemoveExtra = (index) => {
    if (extras.length > 1) {
      const newExtras = extras.filter((_, i) => i !== index);
      setExtras(newExtras);
    }
  };

  const handleExtraChange = (index, field, value) => {
    const newExtras = extras.map((extra, i) => {
      if (i === index) {
        return { ...extra, [field]: value };
      }
      return extra;
    });
    setExtras(newExtras);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChange = (index, field, value) => {
    const newExtras = extras.map((extra, i) => {
      if (i === index) {
        return { ...extra, [field]: value };
      }
      return extra;
    });
    setExtras(newExtras);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
    >
      <h1 className="text-2xl font-bold mb-6">Add Website / Fanpage</h1>

      <p className="text-gray-600 mb-6">
        In this section you can put descriptions for your Media. Rankister is
        designed as an outside Salesperson for your Company and retains 20% of
        orders, so please enter the price you normally charge for your sales and
        do not increase price. Rankister provides the platform and technology to
        make you sell more. In this you will get more orders monthly. Publishers
        who charge increased prices from their public prices will NOT be
        approved! First you need to name your Media, for example if the website
        is Rankister.com you can put the name Rankister. You can sell
        publications on the website by putting the domain name in the Website
        Domain field. If the website also has social channels and to share an
        article you ask for extra you can add in the Extras field for example:
        Share on Facebook Page and put the price in the Box next to it.
        Rankister was also designed for companies or people who do not own a
        website but have pages or groups on social, for example who work as
        Influencers and have only Social profiles. In that case the Site Domain
        Name is left Blank and only the Social part is filled in by putting the
        link of the page or Group. If you want more information before
        proceeding, you can contact us from the Contact page.
      </p>

      {/* Language */}
      <div>
        <label className="block font-semibold">Language *</label>
        <select
          name="language"
          value={formData.language}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select language</option>
          <option value="English">English</option>
          <option value="Mandarin">Mandarin</option>
          <option value="Spanish">Spanish</option>
          <option value="Hindi">Hindi</option>
          <option value="Arabic">Arabic</option>
          <option value="Bengali">Bengali</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Russian">Russian</option>
          <option value="Japanese">Japanese</option>
          <option value="Punjabi">Punjabi</option>
          <option value="German">German</option>
          <option value="Javanese">Javanese</option>
          <option value="Korean">Korean</option>
          <option value="French">French</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Telugu">Telugu</option>
          <option value="Marathi">Marathi</option>
          <option value="Turkish">Turkish</option>
          <option value="Italian">Italian</option>
          <option value="Tamil">Tamil</option>
          <option value="Urdu">Urdu</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Polish">Polish</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Arabic (Egyptian)">Arabic (Egyptian)</option>
          <option value="Romanian">Romanian</option>
          <option value="Dutch">Dutch</option>
          <option value="Greek">Greek</option>
          <option value="Czech">Czech</option>
          <option value="Hungarian">Hungarian</option>
          <option value="Swedish">Swedish</option>
          <option value="Finnish">Finnish</option>
          <option value="Hebrew">Hebrew</option>
          <option value="Thai">Thai</option>
          <option value="Swahili">Swahili</option>
          <option value="Nepali">Nepali</option>
          <option value="Malay">Malay</option>
          <option value="Kurdish">Kurdish</option>
          <option value="Kazakh">Kazakh</option>
          <option value="Pashto">Pashto</option>
          <option value="Tamil">Tamil</option>
          <option value="Sinhala">Sinhala</option>
          <option value="Khmer">Khmer</option>
          <option value="Tagalog">Tagalog</option>
          <option value="Afrikaans">Afrikaans</option>
          <option value="Armenian">Armenian</option>
          <option value="Danish">Danish</option>
          <option value="Norwegian">Norwegian</option>
          <option value="Icelandic">Icelandic</option>
          <option value="Serbian">Serbian</option>
          <option value="Bosnian">Bosnian</option>
          <option value="Slovak">Slovak</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Media Type */}
      <div>
        <label className="block font-semibold">Media Type *</label>
        <select
          name="mediaType"
          value={formData.mediaType}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select media type</option>
          <option value="Blog">Blog</option>
          <option value="Social Pages">Social Pages</option>
          <option value="Newspaper">Newspaper</option>
        </select>
      </div>

      {/* Nofollow */}
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="nofollow"
            checked={formData.nofollow}
            onChange={handleInputChange}
            className="h-4 w-4"
          />
          <span>Nofollow</span>
        </label>
      </div>

      {/* Categories */}
      <div>
        <label className="block font-semibold">Categories *</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select category</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Science">Science</option>
          <option value="Business">Business</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
          <option value="Travel">Travel</option>
          <option value="Fashion">Fashion</option>
          <option value="Food">Food</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Finance">Finance</option>
          <option value="Art">Art</option>
          <option value="Music">Music</option>
          <option value="Politics">Politics</option>
          <option value="Environment">Environment</option>
          <option value="Automotive">Automotive</option>
          <option value="Gaming">Gaming</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Law">Law</option>
          <option value="Religion">Religion</option>
          <option value="Philosophy">Philosophy</option>
          <option value="History">History</option>
          <option value="Literature">Literature</option>
          <option value="Technology & Gadgets">Technology & Gadgets</option>
          <option value="Social Media">Social Media</option>
          <option value="Parenting">Parenting</option>
          <option value="Pets">Pets</option>
          <option value="Health & Fitness">Health & Fitness</option>
          <option value="Psychology">Psychology</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Personal Development">Personal Development</option>
          <option value="Photography">Photography</option>
          <option value="Architecture">Architecture</option>
          <option value="Interior Design">Interior Design</option>
          <option value="Crafts & DIY">Crafts & DIY</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Mobile Apps">Mobile Apps</option>
          <option value="Web Development">Web Development</option>
          <option value="Software Development">Software Development</option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
          <option value="Virtual Reality">Virtual Reality</option>
          <option value="Augmented Reality">Augmented Reality</option>
          <option value="Data Science">Data Science</option>
          <option value="Cryptocurrency">Cryptocurrency</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Startups">Startups</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Investment">Investment</option>
          <option value="Nonprofit">Nonprofit</option>
          <option value="Education & Learning">Education & Learning</option>
          <option value="Career">Career</option>
          {/* Add more options */}
        </select>
      </div>

      {/* Web Domain */}
      <div>
        <label className="block font-semibold">Web Domain *</label>
        <input
          type="url"
          name="webDomain"
          value={formData.webDomain}
          onChange={handleInputChange}
          placeholder="https://example.com"
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Media Name */}
      <div>
        <label className="block font-semibold">Media Name *</label>
        <input
          type="text"
          name="mediaName"
          value={formData.mediaName}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Price */}
      <div>
        <label className="block font-semibold">Price *</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Minimum price is 20"
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-semibold">Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          rows="4"
          required
        />
      </div>

      {/* Publication Guidelines */}
      <div>
        <label className="block font-semibold">Publication Guidelines *</label>
        <textarea
          name="publicationGuidelines"
          value={formData.publicationGuidelines}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          rows="4"
          required
        />
      </div>

      {/* Publication Duration */}
      <div>
        <label className="block font-semibold">Publication Duration *</label>
        <select
          name="publicationDuration"
          value={formData.publicationDuration}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select duration</option>
          <option value="1 year">1 Year</option>
          <option value="2 years">2 Years</option>
          <option value="Permanent">Permanent</option>
          {/* Add more durations */}
        </select>
      </div>

      {/* Average Publication Time */}
      <div>
        <label className="block font-semibold">
          Average Publication Time *
        </label>
        <select
          name="averagePublicationTime"
          value={formData.averagePublicationTime}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select publication time</option>
          <option value="Max 28">Max 28</option>
          <option value="Max 48">Max 48</option>
          <option value="Max 96">Max 96</option>
        </select>
      </div>

      {/* Extras */}
      <div>
        <div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Extra</label>
            <div className="text-blue-500">
              <i>i</i>
            </div>
          </div>
          <div className="text-red-500 text-sm">
            It is not permitted to include editorial services
          </div>

          {extras.map((extra, index) => (
            <div key={index} className="flex gap-4 mt-2">
              <select
                value={extra.select}
                onChange={(e) =>
                  handleExtraChange(index, "select", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select an option</option>
                {/* Add your select options here */}
              </select>
              <input
                type="text"
                placeholder="Price"
                value={extra.price}
                onChange={(e) =>
                  handleExtraChange(index, "price", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <button
                type="button"
                onClick={() => handleRemoveExtra(index)}
                className="text-red-500 text-xl"
              >
                ×
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddExtra}
            className="mt-4 text-black flex items-center gap-2"
          >
            <span>+</span> Add Extra
          </button>
        </div>

      </div>

      {/* Social Media Links */}
      {["facebook", "instagram", "tiktok", "reddit", "telegram"].map(
        (platform) => (
          <div key={platform}>
            <label className="block font-semibold capitalize">{platform}</label>
            <input
              type="url"
              name={platform}
              value={formData[platform]}
              onChange={handleInputChange}
              placeholder={`https://${platform}.com/yourpage`}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        )
      )}

      {/* Sensitive Topics */}
      <div>
        <label className="block font-semibold">Sensitive Topics</label>
        {["Gambling", "CBD", "Adult", "Trading"].map((topic) => (
          <label key={topic} className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              name="sensitiveTopics"
              value={topic}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setFormData((prevData) => ({
                  ...prevData,
                  sensitiveTopics: isChecked
                    ? [...prevData.sensitiveTopics, topic]
                    : prevData.sensitiveTopics.filter((t) => t !== topic),
                }));
              }}
            />
            <span>{topic}</span>
          </label>
        ))}
      </div>

      {/* Google News */}
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="googleNews"
            checked={formData.googleNews}
            onChange={handleInputChange}
            className="h-4 w-4"
          />
          <span>Google News</span>
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-md"
        >
          Save Product
        </button>
      </div>
    </form>
  );
};

export default AddWebsiteForm;
