# WPC Knowledge Sprint

## The gas nobody can use

A group exercise on stakeholder coordination, actor power, and the delivery of energy policy, prepared for the World Petroleum Congress Knowledge Sprint hosted by KAPSARC. This builds directly on prior work and material developed by Aseem Kumar Mahajan and Mehmet Emre Hatipoglu at the KAPSARC School of Public Policy. 

[**Open the activity**](https://sharan-banerjee-kapsarc.github.io/wpc-knowledge-sprint/)

A technically workable project can remain stalled when the actors responsible for funding, approvals, construction, and local acceptance have not reached the agreements needed to proceed. This exercise asks participants to examine those dependencies, make their assumptions explicit, and decide which conversations should come first.

Each table acts as an advisory group to an energy ministry. Participants score the need for coordination between stakeholders and assess each actor's power to influence whether construction proceeds. The webpage turns those judgments into a network that updates as scores are entered.

### Acknowledgements

The underlying activity draws on material from **Mehmet Emre Hatipoglu** and **Aseem Kumar Mahajan**, who are acknowledged as sources for the stakeholder mapping exercise. This fictional gas-capture case and browser implementation adapt that activity for the WPC Knowledge Sprint.

## The policy case

An oil-producing district flares gas while a nearby power utility needs fuel. A technical review supports a shared gathering and pipeline project, but construction has not started six months later.

Producers want a buyer and a pipeline before investing. The pipeline company needs committed volumes and revenue. The utility wants clear prices and dependable supply. Public funding is limited, the proposed route crosses land used by nearby communities, and the construction schedule is unconfirmed.

Eight actors are included in the exercise:

| Actor | Main concern in the case |
| --- | --- |
| Oil producers | A buyer and a pipeline before investing in gas capture |
| Pipeline company | Committed volumes and revenue before building |
| Power utility | Clear prices and dependable gas supply |
| Energy ministry | Approvals and responsibilities that allow delivery |
| Finance ministry | Public support within a limited budget |
| Lender | Credible commitments and manageable risk |
| Affected communities | A response to land use and local disruption |
| Contractors | A firm schedule and enough staff for construction |

The group must recommend its **next three conversations**: whom to meet, in what order, and what each conversation should secure. After the first assessment, a lender update introduces conditions on land access and the handling of local complaints. Participants reconsider the relationships and power scores affected by those conditions.

## Running the activity

Use **one laptop per table**. Each table is one group, with one participant recording the agreed scores. Participants can open the published activity without a GitHub account or software installation.

Allow **25 minutes for the first scoring exercise**. Discussion of the first map, the case update, revised assessment, and debrief follow separately; the timer does not cover the entire session.

1. **Open and name the group.** Follow the activity link or the facilitator's QR code. Enter a table name. Open **Read the case and actor interests** before scoring.
2. **Start the first assessment.** Select **Start 25 minutes** when the facilitator begins the exercise. The group can pause and resume its timer.
3. **Agree the relationship scores.** Enter one whole-number score from 0 to 100 for each pair in the lower half of the matrix. There are 28 pairs. Record assumptions and disagreements in the notes box.
4. **Agree actor power.** Enter a separate whole-number score from 0 to 100 for each of the eight actors in the gold column. Consider what enables the actor to influence the decision, including funding, approvals, operational control, land access, or the ability to delay delivery.
5. **Save the first assessment.** Once all 28 relationship scores and eight power scores are entered, select **Save first assessment**. Both sets of initial scores are retained. Discuss the map and identify the next three conversations.
6. **Introduce the case update.** When the facilitator gives the instruction, select **Reveal lender update**. The lender requires credible arrangements for land used by the pipeline and a working process for local complaints. Community representatives want an alternative route examined because the original route was chosen before consultation.
7. **Revise and compare.** Change the relationship and power scores affected by the update. Explain the changes in the notes box. Use **First assessment** and **Revised assessment** to compare rounds; changed entries have green borders.
8. **Save the group's work.** Select **Save group file** to download both assessments and notes. Share that file using the collection method announced by the facilitator.

The facilitator sets the pace of the discussion. Each group's timer and reveal button work independently; the webpage has no remote facilitator controls. Several laptops can open the same activity, but they will hold separate assessments.

### Scoring questions

**Relationship score:** How important is coordination between these two actors for getting this project into construction?

**Actor power:** How much can this actor influence whether construction proceeds?

| Score | Relationship: coordination need | Actor power: influence over construction |
| --- | --- | --- |
| 0 | No coordination needed | Little influence |
| 50 | Useful to progress | Moderate influence |
| 100 | Essential to proceed | Decisive influence |

Intermediate scores are allowed. A blank cell means the group has not yet made a judgment. Zero is a completed score. The shaded cells marked `-1` are excluded: they represent self-pairs or duplicate pairs, which are not scored.

## Reading the network

**Circle size shows actor power. Line thickness shows the relationship score.** A small dashed circle means power is still unscored. A power score of zero produces a small solid circle, so every actor remains visible.

The measure menu highlights the actor or actors with the highest selected centrality. Click an actor to follow its links, drag a circle to arrange the graph, or select **Clear actor selection** to clear the selection. The layout does not represent geography or organisational hierarchy.

| Measure | What it describes | Question for the group |
| --- | --- | --- |
| Weighted degree | The sum of an actor's relationship scores | Which actor has the greatest total coordination need in our assessment? |
| Eigenvector | Connections to actors that also have high connection weights | Which actor is closely connected to other well-connected actors? |
| Closeness | Short calculated routes to other reachable actors | Which actors are close to others under our scoring assumptions? |
| Betweenness | An actor's share of shortest routes between other actors | Which actors could connect parts of this assumed network? |

Power and centrality are separate judgments. An actor can have considerable authority or control over resources while having relatively few coordination links. Another actor can connect many stakeholders while having limited formal authority.

The scores reflect the group's interpretation of a fictional case. The map does not establish observed information flows, predict construction outcomes, or determine an actor's rights. A low score or low centrality does not remove a legitimate concern from the policy decision.

### Exploring the graph

Use these controls after discussing the group's first map. They help test assumptions while retaining the agreed relationship and power scores.

| Control | How to use it | Effect on the results |
| --- | --- | --- |
| **Hide actors below a score** | Choose actor power or a centrality measure, then set the minimum score with the slider or value box | Hides actors and their links in the graph; centralities remain unchanged |
| **Hide links below a score** | Set the minimum relationship score, from 0 to 100 | Hides weaker links in the graph; centralities remain unchanged |
| **Arrange nodes** | Choose a 2D or 3D arrangement, or Free dragging | Moves nodes and their connecting lines; scores and centralities remain unchanged |
| **Remove actors and recalculate** | Tick actors to exclude them, or click a circle and select **Remove selected actor** | Excludes those actors and their links, then recalculates the remaining network |
| **Remove hidden actors** | Apply an actor filter, then remove the actors hidden by that filter | Turns the current hidden set into a removal experiment; results are recalculated |

Scores **at or above** the chosen threshold stay visible. At an actor threshold of zero, every remaining actor is shown, including actors whose chosen value is unscored or unavailable. Above zero, those unavailable values are hidden. Link thresholds apply to relationship scores; zero and blank relationships never create links.

Actor power and centrality use different scales. Power ranges from 0 to 100, weighted degree from 0 to 700, eigenvector from 0 to 1, closeness from 0 to 100 under this activity's reciprocal distances, and raw betweenness from 0 to 21 for eight actors. The controls show the scale for the selected measure. The filter is applied once to the current calculated results; hiding an actor does not trigger further removals.

The status above the graph distinguishes a **full assessment** from a **removal experiment**, lists excluded actors, and reports how many actors and positive links are shown. The results table includes every actor remaining in the calculation, even when the view filter hides it. Hidden rows are labelled. A graph that appears disconnected after filtering can still have connected paths in the calculation.

Untick an actor or select **Restore all actors** to reverse removals. **Clear filter** resets the actor cutoff; **Clear link filter** resets the relationship cutoff. **Reset layout** returns the visible actors to a circle in 2D or a sphere in 3D. **Reset exploration** restores all actors, clears both filters, and restores the starting layout and camera in the chosen view. These controls retain all scores, saved assessments, and notes.

Free dragging lets the group make its own clusters and shapes. The connecting lines follow each node. Choosing Automatic arranges the visible nodes using attraction along visible links and repulsion between nodes. Stronger visible links have shorter target lengths. Positions describe an arrangement for discussion, not geography, authority, or an additional centrality measure. Dragging switches the layout to Free dragging.

Exploration settings belong to the group and are applied to whichever assessment is being viewed. When comparing first and revised assessments, use the same filters and exclusions, or reset exploration to compare both complete networks. A removal experiment tests the consequences of an assumed absence; it does not justify excluding an actor from consultation or policy decisions.

### Using the 3D view

Choose **3D** under **Graph view**. New groups start in 3D; previously saved groups keep the 2D view until you change it. Both views use the same assessment, filters, exclusions, and centrality results.

- Drag empty space in the graph to rotate the network.
- Scroll over the graph, or use **+ Zoom** and **− Zoom**, to change the scale. On a touch screen, use the zoom buttons.
- Drag an actor to move it across the current view. Its connecting lines follow it. This switches the arrangement to **Free dragging**.
- Choose **Sphere**, **Cube**, **Layered grid**, or **Automatic** to arrange the actors in three dimensions. In 2D, the equivalent choices are Circle, Square, Grid, and Automatic.
- Select **Reset 3D view** to restore the starting angle and zoom. This keeps node positions, filters, scores, and removals.
- For keyboard rotation, focus the graph and use the arrow keys. Use `+` or `−` to zoom.

The spheres retain their power-based size as the graph turns. Moving an actor closer to the viewer does not make it larger. Zoom scales every node equally. The faint box and axes help show the rotation; neither position nor depth represents authority, geography, or another measure of influence. If labels overlap at one angle, rotate the graph, move a node, or switch to 2D.

**Save group file** retains the chosen view, angle, zoom, and both sets of node positions. **Download network** saves an SVG of the currently displayed angle; the image is static. Open the group file in the activity to continue rotating and editing the network.

### Questions for the debrief

- Which assumption had the greatest effect on the first map?
- Where did the group distinguish formal authority from practical influence?
- Whose power or relationships changed after the lender update, and why?
- Which next three conversations would the group now recommend, and what should each secure?
- What evidence would the ministry need before acting on these recommendations?

## Saving and sharing results

Entries are saved automatically in the browser on the activity's site address when browser storage is available. Clearing site data removes that copy; private browsing may remove it when the session ends. Download a group file as the session record.

| Control | Download or action |
| --- | --- |
| **Save group file** | A JSON file containing both rounds' relationship and power scores, notes, and exploration settings |
| **Open group file** | Opens a saved assessment on this or another computer |
| **Download matrix** | A CSV file for the currently viewed round, with actor name, power, and eight relationship columns |
| **Download centralities** | A CSV file containing power and centralities for all actors remaining in the viewed round, labelled as a full assessment or removal experiment |
| **Download network** | An SVG image of the displayed graph, including filters and node positions, labelled with assessment round and experiment status |

Downloads use the browser's usual download location. The application does not send participants' scores to GitHub, the facilitator, or a central database. The facilitator can collect JSON files and open them one at a time to compare groups. Shared editing and automatic submission collection are not part of this version.

Keep the published address the same during the session. A local file, a localhost address, and the published site have separate browser storage. Use a group file to move results between them.

Version 1 and version 2 group files remain compatible. Files without exploration settings open with all actors included, no filters, and the circle layout. Missing power values stay blank. If an older first assessment was already saved, its historical power remains unscored; power can be entered for the revised assessment after the lender update. New groups require all eight power scores before saving the first assessment. Older CSV import routines may need adjusting for the added power column.

## Technical notes

### Network structure and path distances

The application constructs an **undirected weighted network** with eight actors and up to 28 links. A pair receives one shared relationship score; the exercise does not distinguish influence from actor A to B from influence from B to A.

Positive relationship scores create links. Zero and blank entries create no link, but only zero counts as scored. Actor power is stored separately and does not enter the centrality calculations.

For a positive relationship score `w`, the path distance is `1 / w`. Higher coordination scores therefore produce shorter calculated links. This is an analytical convention for this exercise, not an observed travel time, communication cost, or probability of cooperation.

The JavaScript implementation scales reciprocal distances to common integers using `BigInt`. It preserves ties between equally short routes exactly. Dijkstra's algorithm finds shortest distances, and Brandes dependency accumulation apportions betweenness among equal shortest paths.

### Centrality calculations

- **Weighted degree** is the sum of positive relationship scores incident to an actor. Its possible range is 0–700.
- **Eigenvector centrality** uses the weighted adjacency matrix. The highest value in each assessment is scaled to 1. Power iteration uses a diagonal shift equal to the highest weighted degree to avoid cycling in bipartite graphs. It stops when the largest change in the unit vector falls below `1e-13`, with a limit of 20,000 iterations. Eigenvector results are withheld when the calculated network is disconnected or has fewer than two actors. Removed actors are excluded from both the adjacency matrix and normalisation.
- **Closeness** is the number of other reachable actors divided by the sum of shortest-path distances to them. The CSV also includes `cl_raw`, the reciprocal of that distance sum. Isolated actors have no closeness value. Values are calculated within each actor's reachable set, without an additional correction for component size; closeness across separate connected sets should be read with that limitation in mind.
- **Betweenness** sums an actor's share of shortest paths between all unordered pairs of other actors. The table displays the unnormalised value. The CSV also includes `bw_norm = 2 × betweenness / [(n − 1)(n − 2)]`. Here `n = 8` for the full assessment, or the number of remaining actors in a removal experiment. With fewer than three actors, normalised betweenness is zero.

### Removal experiments and view filters

A removal experiment calculates the induced network of the remaining actors: retained links keep their original scores, and no replacement links are invented. The eight-actor scoring matrix and both saved assessments remain intact. Degree, shortest paths, reachable sets, and eigenvector are recalculated using only the remaining actors. Empty and singleton networks are supported; undefined values appear as a dash.

Actor and link thresholds are display filters applied after this calculation. They do not alter weights, path calculations, or table rankings. Centrality filters use the current calculated measures, including any active removal experiment. Automatic layout uses a deterministic force arrangement followed by uniform scaling to fit the graph; its visible links govern attraction, but distances in that arrangement are not used for centrality calculations.

### Visual scales and comparison between rounds

Circle area increases linearly with the power score above a minimum visible area. For power `p` from 0 to 100, the radius in SVG coordinate units is `sqrt(144 + 16.2 × p)`: 12 at power 0 and 42 at power 100, before camera zoom in 3D. Unscored power uses radius 12 with a dashed border.

Line width is `0.8 + 0.055 × w` in SVG coordinate units for positive relationship score `w`. Both visual scales are fixed across assessments. Actor positions, both view thresholds, the chosen layout, and excluded actors are saved with the group. Circle, Square, and Grid arrange the actors currently visible. Automatic recomputes its arrangement when scores or filters change; Free dragging retains manually chosen positions.

Each round retains its own relationship and power scores. Eigenvector is rescaled separately in each round, so changes in its displayed value should be interpreted alongside changes in the network and ranking.

The 3D display stores actual x, y, and z coordinates and rotates them around two axes. It uses orthographic projection into SVG, with depth ordering and shaded spheres. There is no perspective size scaling: power-based node area is independent of depth. Camera zoom scales node radii and the arrangement together. Node dragging moves an actor in the camera plane while retaining its depth in that view, subject to coordinate bounds. The 3D Automatic layout uses attraction along visible links and repulsion in three dimensions. Geometry does not enter any centrality calculation. Both views work offline without an external graphics library or WebGL requirement.

### Software, files, and verification

The GitHub Pages version runs in a current browser using HTML, CSS, and JavaScript. It has no server-side calculation service, external chart library, or package installation requirement. The files are:

| File | Purpose |
| --- | --- |
| [index.html](index.html) | Case, scoring matrix, power inputs, network display, timer, and downloads |
| [network.js](network.js) | Score validation and network calculations |
| [README.md](README.md) | Case overview, participant guidance, methods, and hosting instructions |

The downloadable group format remains version 3, with optional 3D fields. It retains both rounds' relationship and power scores and adds `group.exploration`: excluded actor indices, actor filter measure and threshold, link threshold, layout, eight 2D node positions, `dimension` (`2d` or `3d`), `positions3d` (eight sets of x, y, z coordinates), and `camera` (yaw, pitch, zoom). Versions 1 and 2 remain accepted; no original scores are discarded during migration. CSV files are UTF-8 with a byte-order mark for Excel. Centrality CSVs add `assessment_round`, `network_scope`, and `excluded_actors`; a removal experiment includes only remaining actors. View filters do not remove rows from that CSV. Matrix CSVs always retain all eight actors and their original scores for the selected round. SVG files retain scalable vector shapes and include the visible graph and a scope label.

The browser calculations were checked against the local Python implementation across 105 matrices, including connected, disconnected, empty, all-zero, and equal-shortest-path cases. Browser checks covered power-based circle sizes, score validation, preservation of the first assessment, revised scores after reloading, JSON/CSV/SVG downloads, and older group-file imports. Removal calculations were also checked in 102 cases, including removal of a bridge, empty and singleton networks, and comparisons with igraph. Browser checks covered actor and link filters, layouts, reversible removals, saved exploration settings, and labelled exports. The 3D checks covered rotation, zoom, node dragging, unchanged calculation results across views, retained filters and removals, saved angles and positions, and SVG exports. Geometry checks covered rotation inverses, coordinate bounds, all four arrangements with zero to eight actors, and compatibility with older group files. These checks verify software behaviour; they do not validate participants' policy judgments.

For background on the measures, see the [igraph centrality reference](https://python.igraph.org/en/latest/api/igraph.GraphBase.html) and [NetworkX documentation on weighted betweenness](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.centrality.betweenness_centrality.html). The conventions above describe this implementation.

## Hosting and maintenance

This repository is [sharan-banerjee-kapsarc/wpc-knowledge-sprint](https://github.com/sharan-banerjee-kapsarc/wpc-knowledge-sprint). The participant site is [sharan-banerjee-kapsarc.github.io/wpc-knowledge-sprint](https://sharan-banerjee-kapsarc.github.io/wpc-knowledge-sprint/).

To publish or update the activity:

1. Keep `index.html`, `network.js`, and `README.md` at the top level of the repository. Upload replacement files through **Add file → Upload files** and commit them to `main`.
2. In **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/(root)`. Select **Save** if the publishing source has not yet been configured.
3. Check the deployment in **Actions**. Once publication finishes, use **Visit site** under **Settings → Pages** to confirm the activity opens. GitHub advises allowing up to ten minutes for changes to publish.
4. Share the participant-site address, rather than the repository file-list address. Put its QR code and written link on the instructions slide. Test score entry and downloads on another laptop before the session.

Avoid changing the actor list or saved-data format during a session with existing assessments. The repository README introduces and documents the exercise; `index.html` is the interactive activity served by GitHub Pages.

If the page cannot calculate, check that `network.js` sits beside `index.html` with that exact filename, then reload after deployment. If the site returns a 404, check the publishing source and deployment status. If entries appear missing, check the browser and site address used earlier, or open the downloaded group file.

See GitHub's instructions for [creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [configuring its publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
