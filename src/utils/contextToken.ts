import { createContext } from "react";
import type { PayloadDto } from "../models/auth";

export type ContextTokenType = {
    contextTokenPayload: PayloadDto | undefined;
    setContextTokenPayload: (accessTokenPayload: PayloadDto | undefined) => void;
}
export const ContextToken = createContext<ContextTokenType>({
    contextTokenPayload: undefined,
    setContextTokenPayload: () => {}
});