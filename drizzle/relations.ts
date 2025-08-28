import { relations } from "drizzle-orm/relations";
import { user, session, flashcardDeck, account, flashcard } from "./schema";

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
	flashcardDecks: many(flashcardDeck),
	accounts: many(account),
}));

export const flashcardDeckRelations = relations(flashcardDeck, ({one, many}) => ({
	user: one(user, {
		fields: [flashcardDeck.userId],
		references: [user.id]
	}),
	flashcards: many(flashcard),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));

export const flashcardRelations = relations(flashcard, ({one}) => ({
	flashcardDeck: one(flashcardDeck, {
		fields: [flashcard.deckId],
		references: [flashcardDeck.id]
	}),
}));