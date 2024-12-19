import {
  DataEditor,
  GridCellKind,
} from "@glideapps/glide-data-grid";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "@glideapps/glide-data-grid/dist/index.css";

import {
  useExtraCells,
} from "@glideapps/glide-data-grid-cells";
import { AsyncDropdownCellRenderer } from "../../components/sheet/cells/AsyncDropdownCellRenderer";

function getProducts() {
  return axios.get("https://dummyjson.com/products");
}

const columns = [
  {
    id: "id",
    title: "Id",
    width: 50,
  },
  {
    id: "title",
    title: "Title",
    width: 200,
  },
  {
    id: "price",
    title: "Price",
    width: 200,
  },
  {
    id: "brand",
    title: "Brand",
    width: 200,
  },
  {
    id: "category",
    title: "Category",
    width: 200,
  },
];

export default function ViewTest() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const cellProps = useExtraCells();

  useEffect(() => {
    getProducts().then((res) => {
      if (res.status === 200) {
        setProducts(res.data.products);
        const s = new Set(res.data.products.map((prod) => prod.brand));
        setBrands(Array.from(s));
      }
    });
  }, []);

  const promiseOptions = useCallback(
    (inputValue) =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(brands);
          const filteredValues = brands.filter((brand) =>
            brand?.includes(inputValue.toLowerCase())
          );
          resolve(
            filteredValues.map((item) => {
              return {
                label: item,
                value: item,
              };
            })
          );
        }, 1000);
      }),
    [brands]
  );

  const getContent = useCallback(
    (cell) => {
      const [col, row] = cell;
      const dataRow = products[row];
      // dumb but simple way to do this
      const indexes = columns.map((col) => col.id);
      const d = dataRow[indexes[col]];

      if (indexes[col] === "brand") {
        return {
          kind: GridCellKind.Custom,
          allowOverlay: true,
          // displayData: String(d),
          // data: d,
          data: {
            kind: "async-dropdown-cell",
            allowedValues: [...brands.slice(0, 6)],
            loadOptions: promiseOptions,
            value: d,
          },
          readOnly: false,
        };
      }

      return {
        kind: "text",
        allowOverlay: true,
        displayData: String(d),
        data: d,
        readOnly: false,
      };
    },
    [products, promiseOptions, brands]
  );

  const onCellEdited = useCallback((cell, newValue) => {
    const [col, row] = cell;

    if (newValue.kind === GridCellKind.Custom) {
      setProducts((prev) => {
        // const row = prev.find(p => p.id === )
        const product = prev[row];
        product[columns[col].id] = newValue.data.value;
        return [...prev];
      });
      return;
    }

    if (newValue.kind !== GridCellKind.Text) {
      // we only have text cells, might as well just die here.
      return;
    }

    // const key = indexes[col];
    // products[row][key] = newValue.data;
    setProducts((prev) => {
      // const row = prev.find(p => p.id === )
      const product = prev[row];
      product[columns[col].id] = newValue.data;
      return [...prev];
    });
  }, []);

  return (
    <div className="App">
      <h1>Glide demo</h1>
      <div>
        <DataEditor
          {...cellProps}
          getCellsForSelection={true}
          getCellContent={getContent}
          columns={columns}
          rows={products.length}
          onCellEdited={onCellEdited}
          customRenderers={[AsyncDropdownCellRenderer]}
        />
      </div>
    </div>
  );
}
