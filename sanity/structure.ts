import { type StructureBuilder } from "sanity/structure";
import { HomeIcon, FolderIcon, BellIcon } from "@sanity/icons";


export const structure = (S: StructureBuilder) => {
  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("home")
            .title("Home")
        ),
      S.divider(),
      ...S.documentTypeListItems()
        .filter(type => !["home", "settings", "info"].includes(type.getId() as string)),
      S.divider(),
      S.listItem()
        .title("Info")
        .child(
          S.document()
            .schemaType("info")
            .title("Info")
        ),
      S.listItem()
        .title("Settings")
        .icon(BellIcon)
        .child(
          S.document()
            .schemaType("settings")
            .title("Settings")
        ),
    ])
};