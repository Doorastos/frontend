import Breadcrumbs from "@/components/breadcrumbs";
import { BreadcrumbsItemType } from "@/components/breadcrumbs/item";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Settings from "./settings";
import StartPriceFrom from "./settings/startPriceFrom";
import { ActiveCategoryItemType } from "./settings/filter/categories/item";
import Products from "./products";
import { ProductType } from "@/redux/reducers/static";
import { useSelector } from "react-redux";
import { selectProductItems } from "@/redux/selectors";
import UniqueOffer from "@/components/uniqueOffers";

export type PriceFromType = ('Ascending' | 'Descending') | null
export type SecurityItemType = ProductType['security'] | null

const CatalogPage: FC = () => {
  const router = useRouter();
  const products = useSelector(selectProductItems);
  const [breadcrumbsItems, setBreadcrumbsItems] = useState<BreadcrumbsItemType[]>([]);
  const [startPriceFromItem, setStartPriceFromItem] = useState<PriceFromType>(null);
  const [activeSecurityItem, setActiveSecurityItem] = useState<SecurityItemType>(null);
  const [activeCategoryItems, setActiveCategoryItems] = useState<ActiveCategoryItemType[]>([]);

  const resetSettings = () => {
    setBreadcrumbsItems(prev => prev.filter(i => !i.href?.includes('?where')));
    setStartPriceFromItem(null);
    setActiveSecurityItem(null);
    setActiveCategoryItems([]);
  };
  const setActiveCategoryItem = (category: ActiveCategoryItemType['category'], newItems: string[]) => {
    let categoryIndex = activeCategoryItems.findIndex(c => c.category === category);

    if (categoryIndex !== -1) {
      setActiveCategoryItems(prev => {
        let copy = [...prev];

        if (newItems.length !== 0) {
          copy[categoryIndex].items = newItems;
        } else {
          copy = copy.filter(i => i.category !== category);
        };
        
        return copy;
      })
    } else {
      setActiveCategoryItems(prev => [
        ...prev,
        {
          category,
          items: newItems
        }
      ]);
    }
  };
  let whereItem = breadcrumbsItems.find(i => i.href?.includes('where'))?.href?.replace('?where=', '') as (ProductType['where'] | undefined);

  useEffect(() => {
    let whereQuery = router.query?.where;
    let dynamicItems = new Map(); //'where' query 
    let items = [
      {
        name: 'Catalog'
      }
    ];

    if (whereQuery) {
      dynamicItems.set('where', { name: whereQuery === 'house' ? 'Doors to the house' : 'Doors to the apartment', href: `?where=${whereQuery}` });
      items.push(dynamicItems.get('where'));
    }

    setBreadcrumbsItems(items);
  }, [router.query]);

  return <>
    <Head>
      <title>Catalog | Doorastos</title>
      <meta name="description" content="Doorastos - catalog page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbsItems} />
      <Settings
        resetSettings={resetSettings}
        activeLink={router.query?.where}
        activeSecurityItem={activeSecurityItem}
        setActiveSecurityItem={setActiveSecurityItem}
        activeCategoryItems={activeCategoryItems}
        setActiveCategoryItem={setActiveCategoryItem}
      />
      <StartPriceFrom
        activeItem={startPriceFromItem}
        setActiveItem={setStartPriceFromItem}
      />
      <Products
        itemsPerPage={3}
        allItems={products}
        activeSecurityItem={activeSecurityItem}
        startPriceFromItem={startPriceFromItem}
        whereItem={whereItem}
        activeCategoryItems={activeCategoryItems}
      />
      <UniqueOffer />
    </main>
  </>
}

export default CatalogPage;