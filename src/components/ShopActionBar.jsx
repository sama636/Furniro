import { usePagination } from "./PaginationContext";
import FilterIcon from "/src/assets/system-uicons_filteringShopABFilter.svg"
import SquaresViewIcon from "/src/assets/VectorShopABIcon1.svg"
import SingleViewIcon from "/src/assets/VectorShopABIcon2.svg"
export default function ShopActionBar({productData, error, isLoading, setSortBy}) {
  const {productsPerPage, setProductsPerPage, currentPage, setCurrentPage } = usePagination();

  if (error) return <div>Failed to load products</div>;
  if (isLoading) return <div>Loading...</div>;

  function handleProductsPerPageChange(event) {
    setProductsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page when products per page changes
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="bg-creamy flex items-center justify-center lg:justify-between py-10 flex-wrap px-10 gap-2">
      <div className="flex items-center gap-4 lg:pl-10">
        <div className="flex gap-2 items-center pr-1">
          <img src={FilterIcon} alt="Filter Icon" />
          <span className="text-xl">Filter</span>
        </div>
        <img src={SquaresViewIcon} alt="Squares View Icon" />
        <img src={SingleViewIcon} alt="Single View Icon" />
        <p className="pl-4 ml-4 border-l-[2px] border-gray-500">
          Showing 1-{productsPerPage <= productData.data.length ? productsPerPage : productData.data.length} of {productData.data.length} results
        </p>
      </div>
      <div className="flex lg:justify-between justify-center items-center gap-10 pr-10">
        <div className="flex gap-2 items-center">
          <label className="text-lg" htmlFor="prod-per-page">Show</label>
          <select
            className="text-gray-500 lg:text-lg p-2"
            name="Show"
            id="prod-per-page"
            onChange={handleProductsPerPageChange} // Update products per page
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="32">32</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label className="text-lg" htmlFor="prod-sort">Sort by</label>
          <select className="text-gray-500 lg:text-lg p-2" name="Sort" id="prod-sort" defaultValue="Default" onChange={handleSortChange}>
            <option value="Default">Default</option>
            <option value="Price">Price</option>
            <option value="Name">Name</option>
          </select>
        </div>
      </div>
    </div>
  );
}
