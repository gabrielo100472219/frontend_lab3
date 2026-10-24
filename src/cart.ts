import log from "loglevel";
import type { Coffee } from "./data";

log.warn("*** Cargado el chunk del carrito");

export const cartTotal = (items: Coffee[]): number =>
  items.reduce((sum, coffee) => sum + coffee.price, 0);
