const ProfileForm = () => {
  return (
    <div>
      <h2 className="text-red-500 text-xl font-medium mb-6">
        Edit Your Profile
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="Md"
              className="bg-gray-100 p-3 rounded  focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Rimel"
              className="bg-gray-100 p-3 rounded  focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="rimel1111@gmail.com"
              className="bg-gray-100 p-3 rounded  focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="Kingston, 5236, United State"
              className="bg-gray-100 p-3 rounded  focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <h3 className="text-sm font-medium">Password Changes</h3>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full bg-gray-100 p-3 rounded  focus:ring-1 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full bg-gray-100 p-3 rounded  focus:ring-1 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full bg-gray-100 p-3 rounded  focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div className="flex justify-end items-center gap-6 mt-8">
          <button type="button" className="text-sm font-medium cursor-pointer">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-red-500 text-white px-10 py-3 cursor-pointer rounded hover:bg-red-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
