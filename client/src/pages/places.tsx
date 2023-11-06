import { Link, useParams } from "react-router-dom";

export const PlacesPage = () => {
  const { action } = useParams();

  const getContent = () => {
    switch (action) {
      case "new":
        return (
          <div>
            <form>
              <label htmlFor="title" className="text-2xl mt-4">
                Title
              </label>
              <input type="text" id="title" placeholder="Title" />

              <label htmlFor="address" className="text-2xl mt-4">
                Address
              </label>
              <input type="text" id="address" placeholder="Address" />

              <label htmlFor="description" className="text-2xl mt-4">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Description"
                className="resize-none"
              />

              <label htmlFor="imgUrl" className="text-2xl mt-4">
                Photos
              </label>
              <div className="flex gap-2">
                <input type="text" id="imgUrl" placeholder="Add using url" />
                <button className="bg-gray-200 grow px-4 rounded-md">
                  Grab&nbsp;photo
                </button>
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-2">
                <button className="flex justify-center gap-1 border bg-transparent rounded-md p-4 text-2xl text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  Upload
                </button>
              </div>

              <label htmlFor="perks" className="text-2xl mt-4">
                Perks
              </label>
              <input type="text" id="title" placeholder="Title" />

              {/* address: String,
  images: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number, */}
            </form>
          </div>
        );
      default: {
        return (
          <div className="text-center">
            <Link
              to="/account/places/new"
              className="bg-primary text-white py-2 px-4 rounded-md gap-2 inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p>Add a new place</p>
            </Link>
          </div>
        );
      }
    }
  };

  return <div>{getContent()}</div>;
};
