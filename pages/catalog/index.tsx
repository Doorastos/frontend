import Breadcrumbs from "@/components/breadcrumbs";
import { BreadcrumbsItemType } from "@/components/breadcrumbs/item";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Settings from "./settings";
import StartPriceFrom from "./settings/startPriceFrom";
import { ActiveCategoryItemType } from "./settings/filter/categories/item";

const CatalogPage: FC = () => {
  const router = useRouter();
  const [breadcrumbsItems, setBreadcrumbsItems] = useState<BreadcrumbsItemType[]>([]);
  const [startPriceFromItem, setStartPriceFromItem] = useState<string | null>(null);
  const [activeSecurityItem, setActiveSecurityItem] = useState<string | null>(null);
  const [activeCategoryItems, setActiveCategoryItems] = useState<ActiveCategoryItemType[]>([]);

  const setActiveCategoryItem = (category: string, newItems: string[]) => {
    let categoryIndex = activeCategoryItems.findIndex(c => c.category === category);

    if (categoryIndex !== -1) {
      setActiveCategoryItems(prev => {
        let copy = [...prev];
        copy[categoryIndex].items = newItems;

        return copy;
      })
    } else {
      setActiveCategoryItems(prev => [
        ...prev,
        {
          category: category,
          items: newItems
        }
      ]);
    }
  };

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
      <title>Catalog - Doorastos</title>
      <meta name="description" content="Catalog" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbsItems} />
      <Settings
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
    </main>
  </>
}

export default CatalogPage;