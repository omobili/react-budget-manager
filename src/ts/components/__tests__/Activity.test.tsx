import * as React from "react";
import * as renderer from "react-test-renderer";

import {Activity} from "../Activity";

describe('Activity', () => {
    describe('Snapshots', () => {
        test('should match snapshot for a negative amount', () => {
            let activity = renderer.create(
                <Activity label={"depense"} amount={-12.45} />,
            );

            let tree = activity.toJSON();
            expect(tree).toMatchSnapshot();
        });

        test('should match snapshot for a positive amount', () => {
            let activity = renderer.create(
                <Activity label={"recette"} amount={12.45} />,
            );

            let tree = activity.toJSON();
            expect(tree).toMatchSnapshot();
        });

        test('should match snapshot for given id (0)', () => {
            let activity = renderer.create(
                <Activity label={"depense"} amount={-12.45} id={0} />,
            );

            let tree = activity.toJSON();
            expect(tree).toMatchSnapshot();
        });

        test('should match snapshot for given id (> 0)', () => {
            let activity = renderer.create(
                <Activity label={"depense"} amount={-12.45} id={123} />,
            );

            let tree = activity.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});

