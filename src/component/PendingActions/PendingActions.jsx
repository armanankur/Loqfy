const PendingActions = () => {
  return (
    <div className="shadow-md h-auto p-4 w-full bg-white rounded-lg mt-2">
      <p className="text-xl font-semibold ml-4">Pending Actions</p>

      <ScrollableCardContainer />
    </div>
  );
};

export default PendingActions;

const Card = () => {
  return (
    <div className="w-full rounded-lg shadow-md p-4">
      <div className="flex flex-col space-y-2">
        <div className="text-lg font-semibold flex justify-between items-center">
          <div className="text-xl text-gray-700 font-bold">#trd35468</div>
          <button className="px-2 py-0 text-sm bg-gray-200 rounded-md text-gray-900">
            10 days left
          </button>
        </div>
        <div className="text-sm text-gray-500">
          2 files are waiting to be Uploaded
        </div>
      </div>
    </div>
  );
};

const ScrollableCardContainer = () => {
  return (
    <div className="overflow-y-auto h-90 p-4 scrollbar-hide ">
      <div className="space-y-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
